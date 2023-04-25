import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Article, ArticlesInstance } from '../models/Articles'
import { Category } from "../models/Category";
import { categories } from "./CategoriesController";
import slugify from "slugify";
import { NUMBER } from "sequelize";

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
    let title = req.body.title
    let body  = req.body.body
    let categoria   = req.body.categoria
    let slug  = req.body.slug

    if(title && body && categoria){
        let newArticle = new Article()

        newArticle.title = title,
        newArticle.body = body,
        newArticle.categoryId = categoria
        newArticle.slug = slugify(body)

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

export const edit = async(req:Request, res: Response)=>{
    let { id } = req.params

    let artigo = await Article.findByPk(id)

    

    if(artigo != undefined){
        let categories = await Category.findAll()
        if(req.body.title && req.body.body && req.body.categoria){
            artigo.title = req.body.title
            artigo.body = req.body.body
            artigo.categoria = req.body.categoria
            
        }

        res.render("admin/articles/edit", {artigo:artigo,categories: categories})
    }else{
        res.redirect("/admin/articles")
    }

    
}

export const updateId = async(req: Request, res: Response) =>{
    let { id } = req.body
    let { title } = req.body
    let { body }  = req.body
    let { categoria } = req.body

    if(id){
        await Article.update({title: title, body:body, categoryId: categoria, slug:slugify(title)},{
            where:{
                id: id
            }
        })

        res.redirect("/admin/articles")
    }else{
        res.redirect("/admin/articles")
    }

    
}

export const page = async(req: Request, res: Response) =>{
    let page = parseInt(req.params.num)
    let offset = 0

    if(isNaN(page) || page == 1){
        offset = 0
    }else{
        offset = page * 4
    }

    //1 = 0 - 3
    //2 = 4 - 7
    //3 = 8 - 11
    //4 = 12 - 15
    //5 = 16 -19

    let articles = await Article.findAndCountAll({
        limit: 4,
        offset: offset
    })

    if(articles){
        let next
        if(offset  + 4 >= articles.count){
            next = false
        }else{
            next = true
        }

        let result = {
            next:next,
            articles : articles
        }


        res.json(articles)
    }
    
}