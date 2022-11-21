import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { User } from "../src/Entity/user";
const jwt = require('jsonwebtoken');


export let authUser = async (req,res) =>{
    const token=req.header.authtoken;
    let decoded ;
console.log(token,"---------------");
    if(!token) 
    res.status(500).json({message:"No token found"});
         else{
            try
            {
                decoded = jwt.verify(token, "Mysecretkey")
                console.log(decode);
                const result = await User.find()
                console.log(result);
               
                    if(result!=decoded)
                    {
                        res.status(400).json({success:false})
                    }
                    else
                    {
                        res.status(200).json({decode});
                    }
        
            }
            catch{
                return res.status(400).json({success:false, data:"Invalid Token"})
            }
        }
        
         }
    

