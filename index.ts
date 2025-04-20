import express, { Application, Request, Response } from "express";
import cors from "cors"
import eventRoute from "./routers/event.router"
import organizerRoute from "./routers/organizer.router"

const PORT:number = 5000;

const app:Application = express()

app.use(cors())
app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("<div>Event API</div>")
})

app.use("/events", eventRoute)
app.use("/organizers", organizerRoute)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))