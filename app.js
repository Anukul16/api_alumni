const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db_gateway = require('./config/db-config');
const userRoute = require('./routes/users');  // Import userRoute
const userLikeRoute = require('./routes/userLikes')
const uploadRoute = require('./routes/uploadRoute')
const adminRoute = require('./routes/admin')
const app = express();
const db = new db_gateway();

app.use(cors({ origin: '*' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/upload',express.static(path.join(__dirname, 'assets/uploads')));
app.use('/access', express.static(path.join(__dirname, 'assets')));

// Define routes
app.use('/users', userRoute);  
app.use('/userlike',userLikeRoute);
app.use('/uploads',uploadRoute);
app.use('/admin',adminRoute)
app.get('/', (req, res) => res.send('Hello World'));

// Error handling
app.use((req, res) => res.status(404).send('Not Found'));
app.use((err, req, res, next) => { 
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Set the port and start the server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

module.exports = app;
