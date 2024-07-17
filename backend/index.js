// TODO: run sequelize mirgrations once done initializing tables!!!!!!
// do it before adding data

// TODO: revise this later

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const db = require("./models");
const { Building } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

dotenv.config();

// TODO: change ports
const port = process.env.PORT || 4000;

// TODO: do I still need sync????
// TODO: remove port from print statement at the end
// db.sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
// }).catch((error) => {
//     console.error('Error syncing database:', error);
// });
