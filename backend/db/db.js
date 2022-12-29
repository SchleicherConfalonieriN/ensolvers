import {Sequelize} from 'Sequelize';

const db = new Sequelize ('ensolvers','root','',{

    host : 'localhost',
    dialect: 'mysql'
});
export default db;