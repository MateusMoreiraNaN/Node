import { Request, Response } from "express"
import { User, UserInstance } from "../models/User"
import bcrypt, { hash } from 'bcrypt'
import { write } from "fs"
import adminAuth from '../Middlewares/authenticate'

import "express-session";
declare module "express-session" {
  interface SessionData {
    user: { email: string; id: number },
    
   
    
    
    
  }
  

}

export const users = async (req: Request, res: Response) => {
    /*
    if(req.session.user == undefined){
        res.redirect("/")
    }
    */

    if(User){
        let admin = await User.findAll()

        if(admin){
            res.render("admin/users/index", {users:users})
        }
    }
}

export const createUser = async (req: Request, res: Response) => {
    res.render("admin/users/create")
}

export const save = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password } = req.body

    if(User){
        await User.findOne({where:{email:email}})
        
        if(email != undefined){
            
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password, salt)
            if(email && password && hash){
                let newUser = new User()
        
                newUser.email = email
                newUser.password = hash
                await newUser.save()
            
            }
            res.redirect('/admin/users/index')
        }else{
            res.redirect("/admin/users/create")
        }
    }

    
}

export const adminIndex = async(req: Request, res: Response)=>{
    User.findAll().then(users=>{
        res.render("admin/users/index", {users: users})
    })
}

export const login = async(req: Request, res: Response)=>{
    res.render("admin/users/login")
}

export const authenticate = async(req:Request, res: Response)=>{
    let { email } = req.body
    let { password } = req.body

    if(User){
        let user = await User.findOne({where:{email:email}})

        if(user != undefined){
            //validar senha
            
            let correct = await bcrypt.compareSync(password, user.password)
            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.email
                }

                res.redirect("/admin/articles")
            }else{
                res.redirect('/admin/users/login')
            }
        }else{
            res.redirect('/admin/users/login')
        }

    }
}