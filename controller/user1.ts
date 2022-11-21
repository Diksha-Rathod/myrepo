//crud using getRepository

import { Request, Response } from "express";
import { User } from "../src/Entities/user";
import { getManager, getRepository } from "typeorm";
import { Student } from "../src/Entities/student";
const UserDetail = async (req: Request, res: Response) => {
  const entityRep = getRepository(Student);
  let data = await entityRep.save({
    s_name: "Yaash",
    s_age: 14,
    Father_name: "vishal",
  });
  console.log(data, "data");
  
  res.json({
    test: "okk",
    data,
  });
};
//crud using  getManager
// import {Request,Response} from "express";
// import { User } from "../src/Entities/user";
// import { getManager } from "typeorm";
// import { Student } from "../src/Entities/student";
//  const UserDetail=(req:Request,res:Response)=>{
//     const entityManager=getManager();
//     let data=entityManager.insert(User,
//         {
//         name:"Diksha",
//         age:21,
//         email:"diksha@gmail.com"
//     })

//     let data1=entityManager.insert(Student,
//         {
//         s_name:"Diksha",
//         s_age:21,
//         Father_name:"Mahendra"
//     })
// res.json(
//     {
//         "test":"okk",
//         data:data
//     }

// )
// }

export { UserDetail };
