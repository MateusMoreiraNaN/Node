import { Request, Response } from "express"
import { User, UserInstance } from "../models/User"
import bcrypt from 'bcrypt'

export const users = async (req: Request, res: Response) => {
    res.send("Listagem de usúarios")
}

export const createUser = async (req: Request, res: Response) => {
    res.render("admin/users/create")
}

export const save = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password } = req.body

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    if(email && password && hash){
        let newUser = new User()

        newUser.email = email
        newUser.password = hash
        await newUser.save()
    }

    res.redirect('/admin/users/index')
}

export const adminIndex = async(req: Request, res: Response)=>{
    User.findAll().then(users=>{
        res.render("admin/users/index", {users: users})
    })
}