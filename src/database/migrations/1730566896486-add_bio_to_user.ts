import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBioToUser1730566896486 implements MigrationInterface {
    name = 'AddBioToUser1730566896486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

}
