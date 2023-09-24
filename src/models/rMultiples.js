import { DataTypes} from "sequelize";
import  {sequelize}  from "../database/database.js";

export const rMultiples = sequelize.define('rMultiples',{
    id :{
        type: DataTypes.INTEGER(3),
        primaryKey: true,
        autoIncrement: true,
    },
    pNumero: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    respuesta :{
        type: DataTypes.INTEGER(1),
        allowNull: false
    }
}, {
    timestamps: false
})