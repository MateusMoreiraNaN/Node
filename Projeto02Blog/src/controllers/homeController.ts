import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article } from "../models/Articles";
import slugify from "slugify";
import { title } from "process";

export const home = async (req: Request, res: Response)=>{

    let articles = await Article.findAll()
    if(articles){
        res.render('index',{articles: articles})
    }

    
}

export const slug = async (req: Request, res: Response)=>{
    let slug = req.params.slug
    
    
    await Article.findOne({
        where:{
            slug: slug
    }}).then(Article =>{
        if(slug){
        
            res.render("article", {Article: Article})
        }else{
            res.redirect("/")
        }
    })


    
}