const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('daipdb', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});
//upgrade later to get variables from globalEnvFiles
module.exports = sequelize;