import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article, ArticlesInstance } from '../models/Articles'
import { Category } from "../models/Category";

export const articles = async (req: Request, res: Response)=>{
    res.send("ROTAS DE ARTIGOS")
}

export const adminArticles = async (req: Request, res: Response)=>{
    let categories = await Category.findAll()
    if(categories){
        res.render("admin/articles/new", {categories:categories})
    }

    
}

export const save = async (req: Request, res: Response)=>{

}