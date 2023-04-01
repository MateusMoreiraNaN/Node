import express, { Request, Response } from 'express';
import path from 'path'
import dotenv from 'dotenv'
import RouterCategory from './routes/RouterCategory'
import RouterArticles from './routes/RouterArticles'
//import mustache from 'mustache-express'
import ejs from 'express-ejs-layouts'
import bodyParser from 'body-parser'
//import slugify from 'slugify'

dotenv.config()

const server = express()

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));


//server.use(ejs)
//server.set('layout', 'layouts/layout')
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(RouterCategory)
server.use(RouterArticles)



server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);