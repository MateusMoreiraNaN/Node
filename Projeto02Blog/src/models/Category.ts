import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"

export interface CategoryInstance extends Model{
    title: string,
    //slug: string,
    id: number,

    
}

export const Category = sequelize.define<CategoryInstance>("Category",{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        //autoIncrement: true,
        //allowNull: false
        
    },
    /*
    slug:{
        type: DataTypes.STRING,
        allowNull: false
    },
    */
    
},{
    tableName: 'category',
    timestamps: false
})
