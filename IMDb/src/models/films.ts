import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ImdbInstance extends Model{
    idF: number
    nameF: string
    notaF: number
}

export const Imdb = sequelize.define<ImdbInstance>("Imdb",{
    idF:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nameF:{
        type: DataTypes.STRING
    },
    notaF:{
        type: DataTypes.INTEGER
    }
},{
    tableName: 'films',
    timestamps: false
})

