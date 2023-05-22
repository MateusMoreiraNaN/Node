import { Request, Response } from "express";
import { Games } from "../models/games";
import { write } from "fs";
import { where } from "sequelize";

export const game = async(req: Request, res: Response)=>{
    let { title, year, price } = req.body

    let newGame = await Games.create({
        title, year, price
    })

    res.json({ id: newGame.id, title, year, price })
}

export const games = async(req: Request, res: Response)=>{
    let list = await Games.findAll()

    res.json({ list })
}

export const gameId = async(req: Request, res: Response)=>{
    let id = req.params.id
    
    if(isNaN(parseInt(id))){
        //res.send("Isso não é um número")
        //res.json({ id })
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id)

        let game = await Games.findOne({where:{id: id}})

        if(game != undefined){
            res.statusCode = 200
            res.json({game})
        }else{
            res.sendStatus(404)
        }
    }

    
}

export const deleteGame = async(req: Request, res: Response)=>{
    let { id } = req.params

    if(isNaN(parseInt(id))){
        res.sendStatus(400)
        await Games.destroy({
            where:{id}
        })
        res.json({})
    }else{
        res.sendStatus(200)
    }
}

export const updateGame = async(req: Request, res:Response)=>{
    let { id } = req.params
    let { title, year, price } = req.body

    if(isNaN(parseInt(id))){
        let update = await Games.findByPk(id)
        if(update){
            update.title = title
            update.year = year
            update.price = price

            await update.save()

            res.json({update})
        }
    }else{
        res.sendStatus(200)
    }
}

export const oneUpdate = async(req: Request, res: Response)=>{
    let { title, year, price } = req.body
    let { id } = req.params

    let update = await Games.findByPk(id)
    if(update){
        update.title = title
        update.year = year
        update.price = price

        await update.save()

        res.json({update})
    }
}