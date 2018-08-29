// function checkForSession(req, res, next) {
//   if (!req.session.user) {
//     req.session.user = { username: '', cart: [], total: 0 }
//   };
//   // ALT, using destructuring
//   // const { session } = req;
//   // if (!session.user) {
//   //   session.user = { username: '', cart: [], total: 0 }
//   // };
//   next();
// }
// module.exports = {
//   checkForSession
// }

//////////////////////////////////////////
///// devM's solution
module.exports = function( req, res, next ) {
  const { session } = req;
  if ( !session.user ) {
    session.user = { username: '', cart: [], total: 0.00 };
  }   
  next();
};
