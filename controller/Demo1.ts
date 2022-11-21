import { Request, Response } from "express";

import { getManager, getRepository } from "typeorm";

import { Project } from "../src/enti-rel/employ";
import { Employe } from "../src/enti-rel/employ";

export const UserDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();
const proj1 = new Project();
  proj1.projects = "database management";
  let d1 = await entityManager.save(proj1);

  const proj2 = new Project();
  proj2.projects = "web application";
  let d2 = await entityManager.save(proj2);

  const emp = new Employe();
  emp.name = "Shubham";
  emp.projects = [proj1, proj2];
  let d3 = await entityManager.save(emp);

  let repo=getRepository(Employe);
  let result=await repo.find({relations:["projects"]})
  
  res.json({
    done: "one to many and many to one",
    result
  });
}