const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const sequelize = require('./config/database');
const createDatabase = require('./scripts/create.database.script');


app.use(express.json());
app.use('/users', userRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Handle other endpoints or invalid requests
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});
// Create tables than sync database
const startApp = async () => {
    try {
        await createDatabase();  // Create or ensure the database exists.
        await sequelize.sync();  // Sync models with the database
        console.log('Database synced');

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (err) {
        console.error('Failed to sync database:', err);
    }
};

startApp();

module.exports = app; //for tests