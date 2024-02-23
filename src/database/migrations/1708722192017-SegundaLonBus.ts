import { MigrationInterface, QueryRunner } from "typeorm";

export class SegundaLonBus1708722192017 implements MigrationInterface {
    name = 'SegundaLonBus1708722192017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_d9bf36de133178e517bb88bf98b\` ON \`comment_line\``);
        await queryRunner.query(`DROP INDEX \`FK_1bcbbafbae276dd3cfdebcc9aae\` ON \`comment_line\``);
        await queryRunner.query(`CREATE TABLE \`UserLine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userUsuId\` int NOT NULL, \`lineLinId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Bus\` (\`bus_id\` int NOT NULL AUTO_INCREMENT, \`bus_plate\` varchar(255) NOT NULL, \`bus_lat\` float NULL, \`bus_lon\` float NULL, \`bus_status\` varchar(255) NOT NULL DEFAULT 'offline', \`bus_linId\` int NULL, \`bus_usuId\` int NULL, UNIQUE INDEX \`REL_6227284c7794270fa5a8f077d5\` (\`bus_usuId\`), PRIMARY KEY (\`bus_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Usuario\` (\`usu_id\` int NOT NULL AUTO_INCREMENT, \`usu_name\` varchar(255) NOT NULL, \`usu_lastName\` varchar(255) NOT NULL, \`usu_email\` varchar(255) NOT NULL, \`usu_password\` varchar(255) NOT NULL, \`usu_role\` varchar(255) NOT NULL, PRIMARY KEY (\`usu_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Line\` (\`lin_id\` int NOT NULL AUTO_INCREMENT, \`lin_name\` varchar(255) NOT NULL, \`lin_start\` varchar(255) NOT NULL, \`lin_close\` varchar(255) NOT NULL, \`lin_exit_point\` varchar(255) NOT NULL, \`lin_arrival_point\` varchar(255) NOT NULL, \`lin_price\` int NOT NULL, PRIMARY KEY (\`lin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Stops\` (\`par_id\` int NOT NULL AUTO_INCREMENT, \`par_name\` varchar(255) NOT NULL, \`par_lat\` varchar(255) NOT NULL, \`par_long\` varchar(255) NOT NULL, \`par_description\` varchar(255) NULL, \`par_img\` varchar(255) NULL, \`par_linId\` int NOT NULL, UNIQUE INDEX \`IDX_d785903b844291475b89848e54\` (\`par_name\`), PRIMARY KEY (\`par_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Admin\` (\`adm_id\` int NOT NULL AUTO_INCREMENT, \`adm_username\` varchar(255) NOT NULL, \`adm_email\` varchar(255) NOT NULL, \`adm_password\` varchar(255) NOT NULL, PRIMARY KEY (\`adm_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`UserLine\` ADD CONSTRAINT \`FK_66bd93b6cc110390e5d4f7cec7c\` FOREIGN KEY (\`userUsuId\`) REFERENCES \`Usuario\`(\`usu_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserLine\` ADD CONSTRAINT \`FK_2c44bbfe593969ec3fa475180a2\` FOREIGN KEY (\`lineLinId\`) REFERENCES \`Line\`(\`lin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Bus\` ADD CONSTRAINT \`FK_6227284c7794270fa5a8f077d57\` FOREIGN KEY (\`bus_usuId\`) REFERENCES \`Usuario\`(\`usu_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Bus\` ADD CONSTRAINT \`FK_33217bc51eceabe5544aea7337a\` FOREIGN KEY (\`bus_linId\`) REFERENCES \`Line\`(\`lin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment_line\` ADD CONSTRAINT \`FK_d9bf36de133178e517bb88bf98b\` FOREIGN KEY (\`com_idUser\`) REFERENCES \`Usuario\`(\`usu_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment_line\` ADD CONSTRAINT \`FK_1bcbbafbae276dd3cfdebcc9aae\` FOREIGN KEY (\`com_idLine\`) REFERENCES \`Line\`(\`lin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Stops\` ADD CONSTRAINT \`FK_625be657de8ceccc323d1aa7c01\` FOREIGN KEY (\`par_linId\`) REFERENCES \`Line\`(\`lin_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Stops\` DROP FOREIGN KEY \`FK_625be657de8ceccc323d1aa7c01\``);
        await queryRunner.query(`ALTER TABLE \`comment_line\` DROP FOREIGN KEY \`FK_1bcbbafbae276dd3cfdebcc9aae\``);
        await queryRunner.query(`ALTER TABLE \`comment_line\` DROP FOREIGN KEY \`FK_d9bf36de133178e517bb88bf98b\``);
        await queryRunner.query(`ALTER TABLE \`Bus\` DROP FOREIGN KEY \`FK_33217bc51eceabe5544aea7337a\``);
        await queryRunner.query(`ALTER TABLE \`Bus\` DROP FOREIGN KEY \`FK_6227284c7794270fa5a8f077d57\``);
        await queryRunner.query(`ALTER TABLE \`UserLine\` DROP FOREIGN KEY \`FK_2c44bbfe593969ec3fa475180a2\``);
        await queryRunner.query(`ALTER TABLE \`UserLine\` DROP FOREIGN KEY \`FK_66bd93b6cc110390e5d4f7cec7c\``);
        await queryRunner.query(`DROP TABLE \`Admin\``);
        await queryRunner.query(`DROP INDEX \`IDX_d785903b844291475b89848e54\` ON \`Stops\``);
        await queryRunner.query(`DROP TABLE \`Stops\``);
        await queryRunner.query(`DROP TABLE \`Line\``);
        await queryRunner.query(`DROP TABLE \`Usuario\``);
        await queryRunner.query(`DROP INDEX \`REL_6227284c7794270fa5a8f077d5\` ON \`Bus\``);
        await queryRunner.query(`DROP TABLE \`Bus\``);
        await queryRunner.query(`DROP TABLE \`UserLine\``);
        await queryRunner.query(`CREATE INDEX \`FK_1bcbbafbae276dd3cfdebcc9aae\` ON \`comment_line\` (\`com_idLine\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_d9bf36de133178e517bb88bf98b\` ON \`comment_line\` (\`com_idUser\`)`);
    }

}
