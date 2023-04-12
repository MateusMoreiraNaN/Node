import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article } from "../models/Articles";

export const home = async (req: Request, res: Response)=>{

    let articles = await Article.findAll()
    if(articles){
        res.render('index',{articles: articles})
    }

    
}

export const slug = async (req: Request, res: Response)=>{
    let { slug } = req.params

    if(slug){
        await Article.findOne({
            where:{
                slug: slug
            }

            
        })

        res.render("article", {Article: Article})
    }else{
        res.redirect("/")
    }
}