// TODO: run sequelize mirgrations once done initializing tables!!!!!!
// do it before adding data

// TODO: revise this later

const express = require('express');
const app = express();
const router = require('./routes/router');

const port = 4000;

app.use(express.json());
app.use('/', router);

const db = require("./models");
const { Building } = require('./models');


// db.sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
// }).catch((error) => {
//     console.error('Error syncing database:', error);
// });
