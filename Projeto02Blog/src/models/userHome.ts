import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"
//import { Article } from "./Articles"
import { STRING } from "sequelize"

export interface UserdhomeInstance extends Model{
    email: string,
    password2: string,
    id2: number,
    
   
    
  

    
}

export const Userhome = sequelize.define<UserdhomeInstance>("Userhome",{
    id2: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password2:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
    
    

    
},{
    tableName: 'userhome',
    timestamps: false
})