import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1711925504916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                ]
            }

            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
