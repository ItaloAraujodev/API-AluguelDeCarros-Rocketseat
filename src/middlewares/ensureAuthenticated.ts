import { Request, Response, NextFunction } from 'express'
import { verify } from "jsonwebtoken"; //Verificar se um token é valido
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('Token missing', 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "fc0b4ecf721759448b90349e48d868b1") as IPayload; // O tipo de retorno vai ser IPayload
        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id)

        if(!user){
            throw new AppError('User does not exists!', 401)
        }

        request.user = {
            id: user_id,
        }

        next();

    } catch (error) {
        throw new AppError("Invalid token!", 401)
    }

}