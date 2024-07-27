// TODO: run sequelize mirgrations once done initializing tables!!!!!!
// do it before adding data

// TODO: revise this later

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const db = require("./models");

const router = require('./routes/router');
const workOrderRoutes = require('./routes/workOrderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// TODO: might want to change routes once more api routes are added
app.use('/', router);
app.use('/', workOrderRoutes);

dotenv.config();





// const { Item } = require('./models');

// (async () => {
//   try {
//     await db.sequelize.sync({ alter: true });

//     // Create 3 items
//     const items = [
//       { name: 'Chair', description: 'Comfortable office chair', category: 'Furniture' },
//       { name: 'Table', description: 'Large conference table', category: 'Furniture' },
//       { name: 'Lamp', description: 'LED desk lamp', category: 'Lighting' },
//     ];

//     await Item.bulkCreate(items);
//     console.log('3 items created successfully.');

//     // Add your existing loaned items creation logic here

//   } catch (error) {
//     console.error('Error creating items:', error);
//   }
// })();


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
