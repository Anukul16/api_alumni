const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db_gateway = require('./config/db-config')

const app = express();
const db = new db_gateway()
// Set view engine (if needed, otherwise can be removed)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Remove this line if you don't use EJS

// CORS options
const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World'); // Respond with "Hello World" at the root endpoint
});

// Error handling
app.use((req, res, next) => {
  res.status(404).send('Not Found'); // Basic 404 response
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(err.status || 500).send('Internal Server Error');
});

// Set the port and start the server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log the server status
});

module.exports = app;
