import { container } from 'tsyringe';
import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        console.log(password, email);
        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const authInfo = await authenticateUserUseCase.execute({ 
            email,
            password
         })

        return response.json(authInfo)
    }

}

export { AuthenticateUserController }