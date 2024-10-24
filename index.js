const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const sequelize = require('./config/database');

// Sync with database
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.error('Failed to sync database:', err);
    });

app.use('/users', userRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Handle other endpoints or invalid requests
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});