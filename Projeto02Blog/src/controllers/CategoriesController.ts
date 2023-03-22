import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Category, CategoryInstance} from '../models/Category'
import bodyParser from 'body-parser'
//import slugify from 'slugify'



export const categories = async (req: Request, res: Response)=>{
    res.send("ROTAS DE CATEGORIAS")

    /*
    res.render('pages/',{
        
    })
    */
}

export const admin = async (req: Request, res: Response)=>{

   
    
    res.render("admin/categories/new")
}

export const save = async (req: Request, res: Response)=>{
   
    let { title } = req.body

    if(title){
        let newCategory = new Category()

        newCategory.title = title 

        await newCategory.save()
    }else{
        res.redirect("/admin/categories/new")
    }
    
    res.redirect('/') 

    
        



}

export const adminCategory = async (req: Request, res: Response)=>{

    Category.findAll()
    
    
    res.render("admin/categories/index",{
        Category
    })
}