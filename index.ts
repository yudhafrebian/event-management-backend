import express, { Application, Request, Response } from "express";
import cors from "cors"

const PORT:number = 5000;

const app:Application = express()

app.use(cors())
app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("<div>Event API</div>")
})

app.use("/events")