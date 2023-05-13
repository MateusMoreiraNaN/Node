import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"
//import { Article } from "./Articles"
import { STRING } from "sequelize"

export interface UserInstance extends Model{
    email: string,
    password: string,
    id: number,
   
    
  

    
}

export const User = sequelize.define<UserInstance>("User",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
    
    

    
},{
    tableName: 'user',
    timestamps: false
})

//User.sync({force: false})