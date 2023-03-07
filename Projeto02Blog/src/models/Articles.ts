import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"
import { Category} from './Category'


export interface ArticlesInstance extends Model{
    title: string
    
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

Category.hasMany(Articles)
Articles.belongsTo(Category)

