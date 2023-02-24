import { Router, Request, Response  } from 'express'

const social = Router()

social.get('/', (req: Request, res: Response)=>{
    res.send('<h1>Postagens</h1>')
    

})

social.get('/postar', (req: Request, res: Response)=>{
    res.send('<h1>Postar FOTO|VIDEO|GIF</h1>')
})

social.get('/config/excluir-conta',(req: Request, res: Response)=>{
    res.send('<h1>Excluir sua conta</h1>')
})

social.get('/perfil/:slug', (req: Request, res: Response)=>{
    let slug = req.params.slug
    res.send(`<h1>${slug.toUpperCase()}</h1>`)
})

export default social