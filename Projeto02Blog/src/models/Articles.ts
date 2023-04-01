import { Model, DataTypes } from "sequelize"
import { sequelize } from "../instances/mysql"
import { Category} from './Category'


export interface ArticlesInstance extends Model{
    title: string,
    //slug: string,
    id: number,
    
}

export const Article = sequelize.define<ArticlesInstance>("Articles",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        //autoIncrement: true,
        //allowNull: false
        
    }
},{
    tableName: 'articles',
    timestamps: false
})

Category.hasMany(Article)
Article.belongsTo(Category)

