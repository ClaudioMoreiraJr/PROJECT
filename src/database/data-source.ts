import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1711925504916} from './migrations/1711925504916-CreateUsersTable';
import user from "../app/entities/User";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [user],
    migrations: [CreateUsersTable1711925504916],
    subscribers: [],
})
