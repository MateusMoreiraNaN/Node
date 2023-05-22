import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRouter from './routes/apiRouter'
import bodyParser from 'body-parser'
import  Cors from 'cors'

dotenv.config()

const server = express()

server.use(Cors())

server.use(express.urlencoded({extended: true}));
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(apiRouter)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})



server.listen(process.env.PORT)