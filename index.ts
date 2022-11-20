const express = require("express");
import "reflect-metadata";
import { createConnection } from "typeorm";
import { router } from "./routes/routes";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);
createConnection()
  .then(() => {
    console.log("Connected database using typeorm");
  })
  .catch((error) => console.log(error));
app.listen(2020);
