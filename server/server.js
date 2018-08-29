require('dotenv').config(); 
const express = require('express');
const { json } = require('body-parser'); 
const session = require("express-session");

// middleware
const checkForSession = require('./middlewares/checkForSession');
// must use: 
// const { checkForSession } = require('./middlewares/checkForSession');
// if you use this format: 
// function checkForSession() {...} 
// module.exports = { checkForSession }

// controllers
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');
const cart_controller = require('./controllers/cart_controller');
const search_controller = require('./controllers/search_controller');

const app = express(); 

app.use(json()); 
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(checkForSession); 

app.use(express.static(`${__dirname}/build`));

// endpoints
// test 
app.get('/api/test', (req, res, next) => {
  // console.log(req.session);
  // console.log(req.body);
  res.sendStatus(200);
});

// swag
app.get('/api/swag', swag_controller.read); 

// auth
app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.get('/api/getUser', auth_controller.getUser);

// cart
app.post('/api/add', cart_controller.add);
app.post('/api/checkout', cart_controller.checkout);
app.delete('/api/delete', cart_controller.delete);

// search
app.get('/api/search', search_controller.search);

// const port = process.env.SERVER_PORT || 3001; // fails
// const port = process.SERVER_PORT || 3001; // succeeds via default
const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );