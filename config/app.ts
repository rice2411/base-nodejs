import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import routes from "../src/routers/v1";
import injector from "../src/helpers/injector";
import { corsOptions } from "./cors";
const session = require("express-session");
const passport = require("passport");
require("../config/passport");

const SUCCESS_CODE = 200;
const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
app.use(session({ secret: "rice", resave: false, saveUninitialized: true }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: false,
  })
);

app.use(bodyParser.json({ limit: "5mb" }));

app.use(cors(corsOptions));
app.disable("x-powered-by");

// ROUTES FOR OUR API
// routes =========================
console.log("[AuthApi] Config API Routes");
// =============================================================================

app.use(function (req, res, next) {
  req.headers["if-none-match"] = "no-match-for-this";
  next();
});

app.use(injector);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", routes);

app.get("/test", isLoggedIn, (req: any, res) => {
  res.send(req?.user);
});
app.get("/fail", isLoggedIn, (req: any, res) => {
  res.send("Login ngu");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const _send = res.send;
  let sent = false;
  (<any>res).send = (data) => {
    if (sent) {
      return;
    }
    _send.bind(res)(data);
    sent = true;
  };
  next();
});

app.get("/_ah/health", (req, res) => {
  res.status(SUCCESS_CODE).json("ok");
});

export default app;
