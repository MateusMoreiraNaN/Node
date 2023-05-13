import { Request, Response } from "express";


import "express-session";
declare module "express-session" {
  interface SessionData {
    treinamento: string;
    ano: number,
    email: string,
    //user:string,
    //username: string,
    //id: number
    user: { [key: string]: any };
   
    
    
    
  }
  

}









export const sessionRouter = async (req: Request, res: Response) => {
    req.session.treinamento = "Formação em Node.js"
    req.session.ano = 2023
    req.session.email = 'victorr@udemy.com'
    
    req.session.user = {
        username: 'mateusmoreira',
        email: 'email@gmail.com',
        id: 10
    }
    res.send("Sesão gerada")
    
}

export const leitura = async (req: Request, res: Response)=>{
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        email: req.session.email,
        user: req.session.user
    })
}