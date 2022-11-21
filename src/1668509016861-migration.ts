import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migration1668509016861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "student",
                columns: [
                    {
                        name: "s_id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "s_name",
                        type: "varchar",
                    },
                    {
                         name:"s_age",
                         type:"bigint",
                    },
                    {
                        name:"Father_name",
                        type:"varchar",
                    }
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
