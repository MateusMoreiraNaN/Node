import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Articles, ArticlesInstance } from '../models/Articles'

export const articles = async (req: Request, res: Response)=>{
    res.send("ROTAS DE ARTIGOS")
}

export const adminArticles = async (req: Request, res: Response)=>{
    res.send("ROTA PARA CRIAR UM NOVO ARTIGO")
}