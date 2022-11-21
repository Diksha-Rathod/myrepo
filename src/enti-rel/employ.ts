import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
 import {Project} from "./project"; 

@Entity() 
export class Employe {  
   
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string; 
   
   @OneToMany(type => Project, project => project.Employe) projects: Project[];  
}

export { Project };
