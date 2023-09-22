import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("cuestdb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})