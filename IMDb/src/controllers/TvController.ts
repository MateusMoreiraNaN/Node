import { Request, Response } from "express";



export const filmes = async (req: Request, res: Response)=>{
    

    res.render('pages/filmes',{

    })
}

export const series = async (req: Request, res: Response)=>{

    res.render('pages/series',{
        
    })
}


