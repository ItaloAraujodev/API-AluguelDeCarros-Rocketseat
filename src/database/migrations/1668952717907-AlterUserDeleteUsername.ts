import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
// Alterando uma tabela já existente no banco
export class AlterUserDeleteUsername1668952717907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "username",
            type: "varchar",
        }))
    }

}
