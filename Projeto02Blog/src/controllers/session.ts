import { Request, Response } from "express";


import "express-session";
declare module "express-session" {
  interface SessionData {
    treinamento: string;
    ano: number,
    email2: string,
    //user:string,
    //username: string,
    //id: number
    user2: { [key: string]: any };
   
    
    
    
  }
  

}









export const sessionRouter = async (req: Request, res: Response) => {
    req.session.treinamento = "Formação em Node.js"
    req.session.ano = 2023
    req.session.email2 = 'victorr@udemy.com'
    
    req.session.user2 = {
        username2: 'mateusmoreira',
        email: 'email@gmail.com',
        id: 10
    }
    res.send("Sesão gerada")
    
}

export const leitura = async (req: Request, res: Response)=>{
    res.json({
        treinamento: req.session.treinamento,
        ano: req.session.ano,
        email: req.session.email2,
        user: req.session.user
    })
}