import { Request, Response } from "express"
import { Userhome, UserdhomeInstance } from "../models/userHome"
import bcrypt, { hash } from 'bcrypt'

export const usershome = async (req: Request, res: Response)=>{
    if(Userhome){
        let user = await Userhome.findAll()

        if(user){
            res.render("user/usershome", {user:user})
        }
    }
}

export const usercreate = async(req: Request, res: Response)=>{
    res.render("user/usershome")
}

export const usersH = async (req: Request, res: Response)=>{
    Userhome.findAll().then(user=>{
        res.render("user/usershome", {user: user})
    })
}

export const save2 = async(req: Request, res: Response)=>{
    let {email} = req.body
    let {password2} = req.body

    if(Userhome){
        await Userhome.findOne({where:{email:email}})
        
        if(email != undefined){
            
            let salt = await bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password2, salt)
            if(email && password2 && hash){
                let newUser2 = new Userhome()
        
                newUser2.email = email
                newUser2.password2 = hash
                await newUser2.save()
            
            }
            res.redirect('/user/usersH')
        }else{
            res.redirect("/user/createhome")
        }
    }

}