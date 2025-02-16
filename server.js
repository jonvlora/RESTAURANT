const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const orderRoutes = require('./routes/orderRoutes');
const tableRoutes = require('./routes/tableRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/orders', orderRoutes);
app.use('/api/tables', tableRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/reports', reportRoutes);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => console.log('Database sync failed: ', error));
