import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migration1668507532759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                         name:"age",
                         type:"bigint",
                    },
                    {
                        name:"email",
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
