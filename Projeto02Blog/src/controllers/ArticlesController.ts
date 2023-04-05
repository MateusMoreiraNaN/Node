import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article, ArticlesInstance } from '../models/Articles'
import { Category } from "../models/Category";

export const articles = async (req: Request, res: Response)=>{
    res.render("admin/articles/index")
    res.redirect('admin/articles')
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
    let { categoria } = req.body

    if(title && body && categoria){
        let newArticle = new Article()

        newArticle.title = title,
        newArticle.body = body
        newArticle.categoria = categoria

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