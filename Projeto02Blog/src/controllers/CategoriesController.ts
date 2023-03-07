import { Request, Response } from "express";
import { Op, where } from "sequelize";
import { Category, CategoryInstance} from '../models/Category'
import bodyParser from 'body-parser'



export const categories = async (req: Request, res: Response)=>{
    res.send("ROTAS DE CATEGORIAS")

    /*
    res.render('pages/',{
        
    })
    */
}

export const admin = async (req: Request, res: Response)=>{
    
    res.render("pages/admin/categories/new")
}

export const save = async (req: Request, res: Response)=>{
    /*
    let title, slug = req.body.title
   
    if(title){
        await Category.create({
            title: title,
            //slug: slugify(title)

           
        }).then(()=>{
            res.redirect("/")
        })
    }else{
        res.redirect("/admin/categories/new")
    }
    */
    
    let { title } = req.body.title

    let newCategory = await Category.create({
        title
    })

    await newCategory.save()

    res.redirect("/")

    
    
}