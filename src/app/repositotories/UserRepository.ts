import user from "../entities/User";
import { AppDataSource } from "../../database/data-source";
import IUser from "../interfaces/IUser";

const userRepository = AppDataSource.getRepository(user);

const getUsers = (): Promise<IUser[]> =>{
    return userRepository.find();

}

export default {getUsers};