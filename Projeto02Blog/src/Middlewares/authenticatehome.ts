import { Request, Response, NextFunction } from "express";

export default function homeAuth(req: Request, res: Response, next: NextFunction){
    if(req.session.user2 != undefined){
        next()
    }else{
        res.redirect("/userhome/loginhome")
    }
}