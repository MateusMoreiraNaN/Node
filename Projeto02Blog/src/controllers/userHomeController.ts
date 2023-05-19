import { Request, Response } from "express"
import { Userhome, UserdhomeInstance} from "../models/userHome"
import bcrypt, { hash } from 'bcrypt'
import { write } from "fs"

import "express-session";
declare module "express-session" {
  interface SessionData {
    user2: { email: string; id2: number },
    
   
    
    
    
  }
  

}


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

export const loginhome = async(req: Request, res: Response)=>{
    res.render("userhome/loginhome")
}

export const authenticateHome = async (req: Request, res: Response)=>{
    let { email } = req.body
    let { password2 } = req.body

    if(Userhome){
        let user2 = await Userhome.findOne({where:{email: email}})

        if(user2 != undefined){
            let correct = await bcrypt.compareSync(password2, user2.password2)

            if(correct){
                req.session.user2 = {
                    id2: user2.id2,
                    email: user2.email
                }
                res.redirect("/")
            }else{
                res.redirect("/userhome/loginhome")
            }
        }else{
            res.redirect("/userhome/loginhome")
        }
    }
    
}