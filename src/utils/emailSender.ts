import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import pdf from "html-pdf";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmailTicket = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; tickets: {code: string}[] }
) => {
    try {
        const templatePathCode = path.join(__dirname, "../templates", "ticketCode.hbs");
        const templateSourceCode = fs.readFileSync(templatePathCode, "utf-8");
        const compileTemplateCode = handlebars.compile(templateSourceCode);
        const generateHTMLCode = compileTemplateCode(data)

        const templatePath = path.join(__dirname, "../templates", "ticket.hbs");
        const templateSource = fs.readFileSync(templatePath, "utf-8");
        const compileTemplate = handlebars.compile(templateSource);
        const generateHTML = compileTemplate(data)

        const pdfBuffer: Buffer = await new Promise((resolve, reject) => {
            pdf.create(generateHTMLCode).toBuffer((err, buffer) => {
              if (err) return reject(err);
              resolve(buffer);
            });
          });

        await transporter.sendMail({
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
        })
    } catch (error) {
        throw error
    }
};                                                               
