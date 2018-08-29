const swag = require('../models/swag.js');

const read = (req, res, next) => {
  res.status(200).send(swag);
}
// ALT function declaration 
// function read(req, res, next) {
//   res.status(200).send(swag);
// } 

module.exports = {
  read
}

////////////////////////////////////////////////
// ALT for both function and module.exports  
// module.exports = {
//   read: (req, res, next) => {
//     res.status(200).send(swag);
//   }
// }; 

