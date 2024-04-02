import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('user')
class user {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {length: 100, nullable: false})
    name: string;

    @Column('varchar', {length: 100, nullable: false})
    email: string;

}

export default user;