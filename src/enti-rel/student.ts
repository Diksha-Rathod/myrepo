import { Entity,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn } from "typeorm";
import { Profile } from "./profile";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToOne(()=>Profile)
    @JoinColumn({
        name:'Profile_id'
    })
    profile:Profile
    Project: any;
}