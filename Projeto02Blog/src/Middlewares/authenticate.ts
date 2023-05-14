import { Request, Response, NextFunction } from "express";

export default function adminAuth(req: Request, res: Response, next: NextFunction){
    if(req.session.user != undefined){
        next()
    }else{
        res.redirect("/admin/users/login")
    }
}

//export default adminAuth