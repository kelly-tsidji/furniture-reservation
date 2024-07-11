// TODO: revise this later

const express = require('express');
const app = express();

// TODO: USE DIFFERENT PORT????
const port = 3000;

app.use(express.json());

const db = require("./models");

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error('Error syncing database:', error);
});
