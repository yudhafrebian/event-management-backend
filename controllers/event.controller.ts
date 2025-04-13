import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getEvents = async(req:Request, res:Response):Promise<any> => {
    try {
        const response = await prisma.events.findMany()
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
export const detailEvents = async(req:Request, res:Response):Promise<any> => {
    try {
        const detail = await prisma.events.findUnique({
            where: {id: parseInt(req.params.id)},
            include: {
                users: true
            }
        })

        if(!detail){
            throw "Event not found"
        }

        res.status(200).send(detail)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
export const b = async(req:Response, res:Response):Promise<any> => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
export const v = async(req:Response, res:Response):Promise<any> => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}