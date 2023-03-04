import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface ArticlesInstance extends Model{
    title: string
    body: string
}

export const Articles = sequelize.define<ArticlesInstance>("Articles",{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false

    }
},{
    tableName: 'articles',
    timestamps: false
})