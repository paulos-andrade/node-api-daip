const { Sequelize } = require('sequelize');

// Use default values if no environment variable is setted, in this case we will use this to allow unitary tests inside jenkins
const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'daipdb'; // Default database name
const dbUser = process.env.DB_USER || 'postgres'; // Default user
const dbPassword = process.env.DB_PASSWORD || 'password'; // Default password

// Initialize Sequelize with the defined variables
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,  // Use the dbHost variable
    dialect: 'postgres', // Adjust dialect as necessary
});

module.exports = sequelize;
