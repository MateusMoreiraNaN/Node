import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/msql";

export interface GamesIntance extends Model{
    id: number,
    title: string,
    year: string,
    price: number
}

export const Games = sequelize.define<GamesIntance>("Games",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.NUMBER,
        allowNull: false
    }

},{
    tableName: 'games',
    timestamps: false
})