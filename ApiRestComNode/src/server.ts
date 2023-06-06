import express, { ErrorRequestHandler, Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import apiRouter from './routes/apiRouter'
import ApiUser from './routes/userRouter'
import bodyParser from 'body-parser'
import  Cors from 'cors'
import passport from 'passport'

dotenv.config()

const server = express()

server.use(Cors())

server.use(express.urlencoded({extended: true}));
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(passport.initialize())

server.use(apiRouter)
server.use(ApiUser)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!')
})

const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{
    if(err.status){
        res.status(err.status)
    }else{
        res.status(400)
    }
    if(err.message){
        res.json({error: err.message})
    }else{
        res.json({error: "Ocorreu um erro"})
    }
}

server.use(errorHandler)

server.listen(process.env.PORT)