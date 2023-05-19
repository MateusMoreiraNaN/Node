import { Request, Response } from "express"
import { Userhome, UserdhomeInstance} from "../models/userHome"
import bcrypt, { hash } from 'bcrypt'
import { write } from "fs"




export const usershome = async (req: Request, res: Response) => {
    /*
    if(req.session.user == undefined){
        res.redirect("/")
    }
    */

    if(Userhome){
        let user = await Userhome.findAll()

        if(user){
            res.render("userhome/usersH", {user:user})
        }
    }
}

export const usercreate = async (req: Request, res: Response) => {
    res.render("userhome/createhome")
}

export const save2 = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password2 } = req.body

    if(Userhome){
        await Userhome.findOne({where:{email:email}})
        
        if(email != undefined){
            
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password2, salt)
            if(email && password2 && hash){
                let newUser = new Userhome()
        
                newUser.email = email
                newUser.password2 = hash
                await newUser.save()
            
            }
            res.redirect('/userhome/usersH')
        }else{
            res.redirect("/userhome/createhome")
        }
    }

    
}

export const usersH = async(req: Request, res: Response)=>{
    Userhome.findAll().then(user=>{
        res.render("userhome/usersH", {user: user})
    })
}