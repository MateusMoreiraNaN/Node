import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"
//import { Article } from "./Articles"
import { STRING } from "sequelize"

export interface UserInstance extends Model{
    email: string,
    password: string
    
  

    
}

export const User = sequelize.define<UserInstance>("User",{
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