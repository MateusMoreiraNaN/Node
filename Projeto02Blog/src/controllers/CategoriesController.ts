import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Category, CategoryInstance } from '../models/Category'

export const categories = async (req: Request, res: Response)=>{
    res.send("ROTAS DE CATEGORIAS")

    /*
    res.render('pages/',{
        
    })
    */
}

export const admin = async (req: Request, res: Response)=>{
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIA")
}