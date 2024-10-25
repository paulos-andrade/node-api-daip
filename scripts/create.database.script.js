const sequelize = require('../config/database');

const createDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // force: true drops tables if they exist, be cautious
        console.log('Database synced successfully.');
        //process.exit(0); // Exit the script once the database is synced
    } catch (error) {
        console.error('Error syncing the database:', error);
        //process.exit(1); // Exit with error
    }
};

module.exports = createDatabase;