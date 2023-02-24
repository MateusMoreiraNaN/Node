import { Router, Request, Response  } from 'express'

const social = Router()

social.get('/perfil', (req: Request, res: Response)=>{
    res.send('<h1>Mateus Moreira</h1>')
    

})




export default social