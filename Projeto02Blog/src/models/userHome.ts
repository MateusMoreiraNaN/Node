import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"
//import { Article } from "./Articles"
import { STRING } from "sequelize"

export interface UserdhomeInstance extends Model{
    email: string,
    password: string,
    id: number,
   
    
  

    
}

export const Userhome = sequelize.define<UserdhomeInstance>("Userhome",{
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
    tableName: 'userhome',
    timestamps: false
})