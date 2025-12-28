// File: boilerplate/server/src/middlewares/ErrorHandling.js


const globalErrHandling = (req,res) => {
     return res.status(err.statusCode || 500).json({
       message: err.message,
       errStack: process.env.NODE_ENV === "develpment" ? err.stack : "",
     });
}
export {globalErrHandling}