import cors from "cors"
import express, { Application, NextFunction, Request, Response } from "express"
import { HTTP, mainError } from "./error/mainError"
import { errorHandler } from "./error/errorHandling"

export const mainApp = (app : Application)=>{
    app.use(express.json())
    app.use(cors())
    app.use("/", (req : Request, res : Response)=>{
        try {
            res.status(HTTP.OK).json({
                message : "Welcome Home"
            })
        } catch (error) {
            res.status(HTTP.BAD_REQUEST).json({
                message : "error"
            })
        }
    })

    app.all("*", (req : Request, res : Response, next :NextFunction)=>{
        next(
            new mainError({
                message : "this error occured due to wrong route",
                status : HTTP.BAD_REQUEST,
                success : false,
                name : "Bad Route"
            })
        )
    })

    app.use(errorHandler)
}