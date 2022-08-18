import express from "express";
import path from "path";
import * as httpStatus from "http-status";

import app from "./config/app";
import env from "./config/env";
import Debug = require("debug");
// import "./config/connection/mongodb";

const logLevel = {
  info: "info",
  error: "error",
  debug: "debug",
};

const debug = Debug("api:index");
const errorHandler = (err, req, res, next) => {
  const errorObj = {
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query,
    error: err,
  };
  const error_obj = JSON.stringify(errorObj);

  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    response_code: err.responseCode,
    message: err.message,
    success: false,
  });
  next();
};

const notFoundHandler = (req, res, next) => {
  const errorMessage = `Invalid api call path: ${req.path}`;
  const err: any = new Error(errorMessage);
  err.response_code = 3;
  err.status = httpStatus.NOT_FOUND;
  const error_obj = JSON.stringify(err);

  next(err);
};

// listen on port config.port
app.listen(env.port, () => {
  debug(`server started on port ${env.port} (${env.env})`);
});

app.use(notFoundHandler);
app.use(errorHandler);

require("./config/connection/mongodb");

module.exports = app;
export default app;
