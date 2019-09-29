// Functions which will be used here and there

/**
 * Authentication middleware for authenticated routes.
 * Use it like:
 * router.get('/authenticated-route', authenticated(), async (ctx, next) {
 *
 * @param object  ctx     Context
 * @param object  next    if authenticated, goes to next
 * @returns
 */
require("dotenv").config();
const jwt = require("jsonwebtoken");

function decodeToken(token) {
  console.log(token);
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_CODE, (error, decoded) => {
      if (error) reject(error);
      resolve(decoded);
    });
  });
}

exports.isAuthenticated = () => {
  return async (ctx, next) => {
      // const jsonValue = await decodeToken(
      //   ctx.request.header.authorization.split(" ")[1]
      // );
      // console.log(jsonValue);
      return next();
  };
};
