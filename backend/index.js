// TODO: run sequelize mirgrations once done initializing tables!!!!!!
// do it before adding data

// TODO: revise this later

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const router = require('./routes/router');

dotenv.config();

app.use(express.json());
app.use('/', router);

const db = require("./models");
const { Building } = require('./models');

// TODO: change ports
const port = process.env.PORT || 4000;

// TODO: do I still need sync????
// TODO: remove port from print statement at the end
// db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
// }).catch((error) => {
//     console.error('Error syncing database:', error);
// });
