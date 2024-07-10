// TODO: revise this later

const express = require('express');
const app = express();

// TODO: USE DIFFERENT PORT????
const port = 3000;

app.use(express.json());

const db = require("./models");

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
