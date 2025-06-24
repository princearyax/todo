
export default function asyncHandler(func) {
  return (req, res, next) => {
    // Ensures that both sync and async functions are handled
    Promise.resolve(func(req, res, next)).catch(next);
  };
}

// Promise.resolve() ensures that any returned value (whether sync or async) is wrapped in a promise.

// .catch(next) ensures that any errors in the promise are forwarded to Express's error handler via next().

//same as
// Promise.resolve(func(req, res, next))
//   .catch((error) => {
//     next(error);
//   });


// module.exports = (func) => {
//   return (req, res, next) => {
//     Promise.resolve(func(req, res, next))
//       .catch(next); // Automatically catch and forward errors to the next middleware
//   };
// };
