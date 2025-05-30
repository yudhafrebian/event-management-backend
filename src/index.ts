import express, { Application, Request, Response } from "express";
import cors from "cors";
import eventRoute from "./routers/event.router";
import organizerRoute from "./routers/organizer.router";
import authRoute from "./routers/auth.router";
import transactionRoute from "./routers/transactions.router";
import dashboardRoute from "./routers/dashboard.router";
import voucherRoute from "./routers/voucher.router";
import "./utils/cronJobs";

const PORT: number = 5000;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<div>Event API</div>");
});

app.use("/dashboard", dashboardRoute);
app.use("/auth", authRoute);
app.use("/events", eventRoute);
app.use("/organizers", organizerRoute);
app.use("/transactions", transactionRoute);
app.use("/vouchers", voucherRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
