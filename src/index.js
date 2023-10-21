import server from './app.js';
import { sequelize } from './database/database.js';
import './models/rFormWeb.js';
import dotenv from 'dotenv';

dotenv.config({ path: ".env" });


async function main(){
    try {
        await sequelize.sync({ force: false });
        server.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } 
}

main();