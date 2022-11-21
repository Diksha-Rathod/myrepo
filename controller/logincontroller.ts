import { Request, Response } from "express";
import { User } from "../src/Entity/user";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";

  export const loginView = async (req:Request, res:Response, next) => {
        const logInData= req.body;
        console.log(logInData,"..........data......");
        console.log(logInData.email);
          let userRepository=getRepository(User);
          let userData = await userRepository.findOne({
            where: {email: req.body.email }
          });
    
         const user=(userData?.email);
         const userp=(userData?.password);
         const useri=(userData?.id);
          if (user===logInData.email&&userp===logInData.password) {
            console.log("login succesfull");
           
         
            jwt.sign(
              { email: user, id: useri },
              "Mysecretkey",{expiresIn:"3600"},(err,token)=>{
                if(err) {
                  res.status(500).json({err});
                }else{
                  console.log(token);
                  res.status(200).json({token});
                }
              })
                
              }
          else{
          res.json("Invalid")
            return { status: false };
          }
        
        }   
       