const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
app.use('/usuario', require('./src/routes/usuario.routes'));

// Run server
app.listen(app.get('port'), () => {
  console.log('app running successfully!!');
  console.log(`http://localhost:${app.get('port')}`);
});
