//npm run start
import express, { Request, Response} from 'express'
import mainRoutes from './routes/index'
import myRoutes from './routes/perfil'

const server = express()

server.use('/', mainRoutes)
server.use('/perfil', myRoutes)

server.listen(8080)