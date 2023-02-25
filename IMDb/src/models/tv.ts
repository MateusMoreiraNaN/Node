import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ImdbInstance2 extends Model{
    idT: number
    nameT: string
    notaT: number
}

export const Imdb2 = sequelize.define<ImdbInstance2>("Imd2",{
    idT:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nameT:{
        type: DataTypes.STRING
    },
    notaT:{
        type: DataTypes.INTEGER
    }
},{
    tableName: 'tv',
    timestamps: false
})