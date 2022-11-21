import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  static findOne(arg0: { where: { email: any; id: any; }; }) {
      throw new Error("Method not implemented.");
  }
  static find() {
      throw new Error("Method not implemented.");
  }
  [x: string]: any;
  isValidatePassword(password: any) {
      throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column("varchar", { nullable: true })
  name: string | null = null;

  @Column("varchar", { nullable: true })
  email: string | null = null;

  @Column("varchar", { nullable: true })
  password: string | null = null;


}