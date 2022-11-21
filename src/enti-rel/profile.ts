import{Entity,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Gender:string;

    @Column()
    Course:string;

}