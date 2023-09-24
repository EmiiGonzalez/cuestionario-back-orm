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
        type: DataTypes.STRING(3),
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