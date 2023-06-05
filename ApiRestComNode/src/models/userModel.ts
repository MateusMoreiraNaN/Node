import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/msql";

export interface UserIntance extends Model{
    id: number
    email: string
    senha: string
    name: string
}

export const User = sequelize.define<UserIntance>("User",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'user',
    timestamps: false
})