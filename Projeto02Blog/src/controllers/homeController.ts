import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article } from "../models/Articles";
import slugify from "slugify";
import { title } from "process";
import { Category } from "../models/Category";

export const home = async (req: Request, res: Response)=>{

    let articles = await Article.findAll({
        order:[
            ['id','DESC']
        ]
    })
    if(articles){
        let categories = await Category.findAll()
        if(categories){
            res.render('index',{articles: articles, categories: categories})
        }

        
    }

    
}

export const slug = async (req: Request, res: Response)=>{
    let slug = req.params.slug

    
    if(slug){
        let article = await Article.findOne({
            where:{
                slug: slug
            }
        })
        if(article){
            let categories = await Category.findAll()
            if(categories){
                res.render('article',{article: article, categories: categories})
            }

    }else{
        res.redirect("/")
    }
    
    /*
    await Article.findOne({
        where:{
            slug: slug
    }}).then(Article =>{
        if(slug){
            //slug
            let categories = await Category.findAll()
        if(categories){
            res.render('article',{Article: Article, categories: categories})
        }
        }else{
            res.redirect("/")
        }
    })
    */

    


    }
}