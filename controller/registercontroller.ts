//crud using getRepository

const express = require("express");
const app = express();

import { Request, Response } from "express";
import { User } from "../src/Entity/user";
import { getRepository } from "typeorm";

export const registerView = async (req: Request, res: Response) => {
 
  const entityRep = getRepository(User);

    const { name, password, email } = req.body;
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

  console.log(req.body, "-------------------body");
  let data = await entityRep.save({
    name:req.body.name,
    email: req.body.email,
    password:req.body.password,
  });

  console.log(data, "data");

  res.json({
    test: "okk",
    data,
  });
};
