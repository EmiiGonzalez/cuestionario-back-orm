import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Carga las variables de entorno desde el archivo .env
dotenv.config({ path: ".env" });


export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.DB_TIMEZONE,
    // Otras opciones de configuración de Sequelize
    logging: false
});
