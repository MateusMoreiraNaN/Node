import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ImdbTnstance extends Model{
    idT: number
    nameT: string
    notaT: number
}

export const ImdbT = sequelize.define<ImdbTnstance>("ImdbT",{
    idT:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nameT:{
        type: DataTypes.STRING
    },
    notaT:{
        type: DataTypes.FLOAT
    }
},{
    tableName: 'tv',
    timestamps: false
})
