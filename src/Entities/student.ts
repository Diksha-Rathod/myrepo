import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  s_id: number;

  @Column("varchar", { nullable: true })
  s_name: string | null = null;

  @Column({ type: "bigint" })
  s_age: number | null = null;

  @Column("varchar", { nullable: true })
  Father_name: string | null = null;
}
