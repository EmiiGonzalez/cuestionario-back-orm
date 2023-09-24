import app from './app.js';
import { sequelize } from './database/database.js';
import './models/rUnicas.js';
import './models/rOtros.js';
import './models/rMultiples.js';

async function main(){
    try {
        await sequelize.sync({ force: true });
        app.listen(3000, () => console.log('Listening on port 3000'))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } 
}

main();