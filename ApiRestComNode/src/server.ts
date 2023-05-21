import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRouter from './routes/apiRouter'

dotenv.config()

const server = express()

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})

server.use(apiRouter)

server.listen(process.env.PORT)