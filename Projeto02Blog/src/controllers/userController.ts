import { Request, Response } from "express"
import { User, UserInstance } from "../models/User"
import bcrypt, { hash } from 'bcrypt'
import { write } from "fs"

export const users = async (req: Request, res: Response) => {
    res.send("Listagem de usúarios")
}

export const createUser = async (req: Request, res: Response) => {
    res.render("admin/users/create")
}

export const save = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password } = req.body

    if(User){
        await User.findOne({where:{email:email}})
        
        if(email == undefined){
            
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
        await User.findOne({where:{email:email}})

        if(email != undefined){
            //validar senha
            
            let correct = bcrypt.compareSync(password, email.password)
        }else{
            res.redirect('/admin/users/login')
        }

    }
}