"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const event_router_1 = __importDefault(require("./routers/event.router"));
const organizer_router_1 = __importDefault(require("./routers/organizer.router"));
const auth_router_1 = __importDefault(require("./routers/auth.router"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send("<div>Event API</div>");
});
app.use("/auth", auth_router_1.default);
app.use("/events", event_router_1.default);
app.use("/organizers", organizer_router_1.default);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
