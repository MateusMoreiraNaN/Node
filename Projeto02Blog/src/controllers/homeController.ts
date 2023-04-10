import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article } from "../models/Articles";

export const home = async (req: Request, res: Response)=>{

    let articles = await Article.findAll()
    if(articles){
        res.render('index',{articles: articles})
    }

    
}