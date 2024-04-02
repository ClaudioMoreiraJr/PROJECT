import { Request, Response, response, Router } from "express";
import user from "../entities/User";    
import UserRepository from "../repositotories/UserRepository";
import IUser from "../interfaces/IUser";

const userRouter = Router();

userRouter.get('/', async (_Req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getUsers();
    return response.status(200).json(users);
});

export default userRouter;
