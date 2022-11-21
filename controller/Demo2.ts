
import { Request, Response } from "express";

import { getManager, getRepository } from "typeorm";

import { Category } from "../src/enti-rel/category"
import { Question } from "../src/enti-rel/Question";

export const UserDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();

  const c1=new Category();
  c1.name="Sport";
  await entityManager.save(c1);

  const c2=new Category();
  c2.name="Movie";
  await entityManager.save(c2);

  const c3=new Category();
  c3.name="Education";
  await entityManager.save(c3);

   const q1=new Question();
   q1.text="Myfirstquestion";
   q1.title="First tes";
   q1.categories=[c1,c2,c3];
   await entityManager.save(q1);
  res.json({
    done: "well-Save relation many to many",
  });
}