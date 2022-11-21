import { Request, Response } from "express";
import { Student } from "../src/enti-rel/student";
import { getManager, getRepository } from "typeorm";
import { Profile } from "../src/enti-rel/profile";
import { Project } from "../src/enti-rel/employ";
import { Employe } from "../src/enti-rel/employ";

export const UserDetail = async (req: Request, res: Response) => {
  const entityManager = getManager();
    const profile = new Profile();
    profile.Gender = "Male";
    profile.Course = "Bsc cs";

    let data = await entityManager.save(profile);
    const student=new Student();
    student.name="Anuj";
    student.profile=profile;

    let data1= await entityManager.save(student);

  
};
