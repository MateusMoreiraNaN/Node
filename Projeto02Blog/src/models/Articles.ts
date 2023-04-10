import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../instances/mysql"
import { Category} from './Category'
import { articles } from "../controllers/ArticlesController"


export interface ArticlesInstance extends Model{
    title: string,
    //slug: string,
    id: number,
    categoryId: number,
    body: string,
    categoria: string
    
}

export const Article = sequelize.define<ArticlesInstance>("Articles",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        //autoIncrement: true,
        allowNull: false
        
    },
    categoryId:{
        type: DataTypes.NUMBER,
        allowNull:  false
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'articles',
    timestamps: false
})

Category.hasMany(Article)
Article.belongsTo(Category)

//Article.sync({force: true}) 

