import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ImdbFnstance extends Model{
    idF: number
    nameF: string
    notaF: number
}

export const ImdbF = sequelize.define<ImdbFnstance>("ImdbF",{
    idF:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nameF:{
        type: DataTypes.STRING
    },
    notaF:{
        type: DataTypes.FLOAT
    }
},{
    tableName: 'films',
    timestamps: false
})

