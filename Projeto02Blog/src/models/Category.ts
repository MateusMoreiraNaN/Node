import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface CategoryInstance extends Model{
    title: string,
    slug: string

    
}

export const Category = sequelize.define<CategoryInstance>("Category",{
    title:{
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true,
        allowNull: false
        
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'category',
    timestamps: false
})

