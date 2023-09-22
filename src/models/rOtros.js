import { DataTypes} from "sequelize";
import  {sequelize}  from "../database/database.js";

export const rOtros = sequelize.define('rOtros',{
    id :{
        type: DataTypes.INTEGER(3),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    pNumero: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    texto :{
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, 
{
    timestamps: false
})