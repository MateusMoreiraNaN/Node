import { Request, Response } from "express";


import "express-session";
declare module "express-session" {
  interface SessionData {
    treinamento: string;
    ano: number
  }
}








export const sessionRouter = async (req: Request, res: Response) => {
    req.session.treinamento = "Formação em Node.js"
    req.session.ano = 2023
}

export const leitura = async (req: Request, res: Response)=>{

}