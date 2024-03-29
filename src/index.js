require('dotenv').config();
const PORT = process.env.PORT || 8000;

const express = require('express');
const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs')
const app = express();



app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', usersRoute);



app.listen(PORT, () => {
    console.log(`Server Running On : ${PORT}`)
});