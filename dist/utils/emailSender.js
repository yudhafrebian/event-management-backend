"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailTicket = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const html_pdf_1 = __importDefault(require("html-pdf"));
exports.transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASSWORD,
    },
});
const sendEmailTicket = (emailTo, subject, content, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const templatePathCode = path_1.default.join(__dirname, "../templates", "ticketCode.hbs");
        const templateSourceCode = fs_1.default.readFileSync(templatePathCode, "utf-8");
        const compileTemplateCode = handlebars_1.default.compile(templateSourceCode);
        const generateHTMLCode = compileTemplateCode(data);
        const templatePath = path_1.default.join(__dirname, "../templates", "ticket.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const compileTemplate = handlebars_1.default.compile(templateSource);
        const generateHTML = compileTemplate(data);
        const pdfBuffer = yield new Promise((resolve, reject) => {
            html_pdf_1.default.create(generateHTMLCode).toBuffer((err, buffer) => {
                if (err)
                    return reject(err);
                resolve(buffer);
            });
        });
        yield exports.transporter.sendMail({
            from: process.env.MAIL_SENDER,
            to: emailTo,
            subject,
            html: content || generateHTML,
            attachments: [
                {
                    filename: "ticket.pdf",
                    content: pdfBuffer,
                    contentType: "application/pdf"
                }
            ]
        });
    }
    catch (error) {
        throw error;
    }
});
exports.sendEmailTicket = sendEmailTicket;
