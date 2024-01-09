const UserSchema = require("../models/userModel");
const express = require("express");
const jwt = require("jsonwebtoken");
const configuration = require("../utils/configurations");

const app = express();
const { version } =require('../../package.json');


//#region Funcion que valida el token
validaToken = (req, res, next) => {
  const urlReq = req.url;
  if (urlReq == "/login" || urlReq == '/register') {
    next();
  } else {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken, configuration.getKey("key"), async (error, usr) => {
        if (usr != undefined) {
          const userModel = new UserSchema(usr.user);
          const validUser = await userModel.authenticate(
            userModel.email,
            userModel.password
          );
          if (validUser.status) {
            next();
          } else {
            res.status(401).json(validUser);
          }
        } else {
          res.status(401).json({ success: false, message: "Acceso denegado" });
        }
      });
    } else {
      res.status(401).json({ success: false, message: "Acceso denegado" });
    }
  }
};
//#endregion

//#region Rutas del api
app.use('/api/auth', validaToken, require("./securityRoute"));
app.use('/api/blog', require("./blogRoute"));
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Im here',
    version: version,
    date: new Date()
  });
})
//#endregion

module.exports = app;