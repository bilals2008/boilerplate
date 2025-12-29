// File: boilerplate/server/src/middlewares/ErrorHandling.js

const globalErrHandling = (err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message,
    errStack: process.env.NODE_ENV === "development" ? err.stack : "",
  });
};
export { globalErrHandling };
