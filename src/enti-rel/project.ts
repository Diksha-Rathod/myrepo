import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import {Employe} from "./employ"; 
@Entity() 
export class Project {  

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   projects: string; 
   
   @ManyToOne(type => Employe, Employe => Employe.projects) Employe: Employe; 
 
}