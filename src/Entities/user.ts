import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column("varchar", { nullable: true })
  name: string | null = null;

  @Column( { type : "bigint" })
  age: number | null = null;

  @Column("varchar", { nullable: true })
  email: string | null = null;


}

