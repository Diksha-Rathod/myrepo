import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { getRepository } from "typeorm";

import { User } from "../src/Entity/user";
const jwt = require("jsonwebtoken");
export let authUser = async (req, res) => {
  const token = req.headers["authtoken"];
  let decoded;
  console.log(token, "---------------");
  console.log(req.headers["authtoken"]);
  if (!token) res.status(500).json({ message: "No token found" });
  else {
    try {
      let userRepository = getRepository(User);
      decoded = await jwt.verify(token, "Mysecretkey");
      console.log(decoded, "decode.......");
      const result = await userRepository.findOne({
        where: { email: decoded.email, id: decoded.id },
      });
      console.log(result);

      if (!result) {
        res.status(400).json({ success: false });
      } else {
        res.status(200).json({ decoded });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, data: "Invalid Token" });
    }
  }
};
