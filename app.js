const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const kbRoutes = require('./routes/kbRoutes');
const postCallRoutes = require('./routes/postCallRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/knowledge', kbRoutes);
app.use('/api/logs', postCallRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is live on port 3000');
});
