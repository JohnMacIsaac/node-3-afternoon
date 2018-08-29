require('dotenv').config(); 
const port = process.SERVER_PORT || 3000; // convenience || default
const express = require('express');
// const bodyParser = require('body-parser');
const { json } = require('body-parser'); // we only need json 
const session = require("express-session");

// middleware 
const app = express(); 
app.use(json());   // invalid: app.use(bodyParser()); bc bodyParser is only an object not a method on itself
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,           // required properties of invoking session
  saveUninitialized: false // ""
}));

// endpoints // test run
app.get('/api/test', (req, res, next) {
  res.sendStatus(200);          // logs 'OK'
  res.status(200).send('A-OK'); // logs 'A-OK'
});

app.listen(port, (req, res, next) => {
  console.log(`Server listening to port ${port}.`); 
})


/* Steps to SET UP Express Server: 
  1. Bash commands: 
    cd projectsDir
    mkdir projDir                    // In projectsDir, 
    cd projDir                       // 
    mkdir server                     // projDir, 
    touch server/index.js            // 
    npm install express body-parser  // 

    git init 
    npm init -y // yes to all defaults for installing package.json 
  
  2. Enter the above code lines 1-20
    note: the app.use(session... sets up cookies
  
  3. Start/run the server : 
    nodemon server/           # or
    nodemon server/server.js  # sometimes called index.js
  */