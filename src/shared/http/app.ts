import { routes } from './routes'
import express, { NextFunction, Request, Response, Router } from 'express'
import cors from 'cors'
import { AppError } from '@shared/errors/app-error'



export const app = express()
app.use(express.json())
app.use(cors())

app.use(routes)
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,

        })
     }
    return response.status(500).json({
        status: 'error',
         message: 'Internal server error'
    })

})

