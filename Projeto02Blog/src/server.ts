import express, { Request, Response } from 'express';
import path from 'path'
import dotenv from 'dotenv'
import RouterCategory from './routes/RouterCategory'
import RouterArticles from './routes/RouterArticles'
import RouterUser from './routes/User'
import RouterUserHome from './routes/UserHome'
import sessionRouter from './routes/session'
//import mustache from 'mustache-express'
import ejs from 'express-ejs-layouts'
import bodyParser from 'body-parser'
//import slugify from 'slugify'
import session from 'express-session';

dotenv.config()

const server = express()

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));


//1 - 1000
//60 - 6000

//Redis
server.use(session({
    secret: "?Ub-crOklGLBR2-RiGlkA#=c&lbRibRafr?Spldru+h+trU@reRohas6Cit4@g-4fdhgdfd5yertt5e5rr$%$%¨%¨$%&&%¨&268644ghdg67dh4ddg6hdg7hddg67hddg8h7dddd8dr7td7y6y768766876r67767768767¨&¨&*&&*", //chave de segurança
    cookie: {maxAge: 3000000}
}))

//server.use(ejs)
//server.set('layout', 'layouts/layout')
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(sessionRouter)
server.use(RouterCategory)
server.use(RouterArticles)
server.use(RouterUser)
server.use(RouterUserHome)




server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);