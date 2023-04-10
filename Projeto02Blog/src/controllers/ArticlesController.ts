import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article, ArticlesInstance } from '../models/Articles'
import { Category } from "../models/Category";
import { categories } from "./CategoriesController";

export const articles = async (req: Request, res: Response)=>{
    /*
    Article.findAll({
        
        include:[{model:Category, required: true}]
    }).then(articles =>{
        res.render("admin/articles/index",{articles: articles})
    })
    */

    let articles = await Article.findAll({include:[{model:Category, required: true}]})
    if(articles){
        res.render("admin/articles/index",{articles: articles})
    }
    

    
}

export const adminArticles = async (req: Request, res: Response)=>{
    let categories = await Category.findAll()
    if(categories){
        res.render("admin/articles/new", {categories:categories})
    }

    
}

export const save = async (req: Request, res: Response)=>{
    let { title } = req.body
    let { body } = req.body
    let { categoria }  = req.body

    if(title && body && categoria){
        let newArticle = new Article()

        newArticle.title = title,
        newArticle.body = body,
        newArticle.categoryId = categoria

        await newArticle.save()
    }else{
        res.redirect('/admin/articles/new')
    }

    res.redirect('/admin/articles')


    /*
    if(title && body && categoria){
        await Article.create({
            title: title,
            body: body,
            categoryId: categoria,
     
        })

        res.redirect('/admin/articles')
    }else{
        res.redirect('/admin/articles/new')
    }
    */
}

export const deleteId = async (req: Request, res: Response)=>{
    let { id } = req.body

    if(id){
        if(!isNaN(id)){
            await Article.destroy({
                where: {
                    id: id
                }
            })
            res.redirect("/admin/articles")
        }else{
            res.redirect("/admin/articles")
        }
    }else{
        res.redirect("/admin/articles")
    }
}