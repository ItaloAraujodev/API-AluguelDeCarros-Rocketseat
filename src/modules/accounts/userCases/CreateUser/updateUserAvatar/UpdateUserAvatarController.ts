import { Request, Response } from 'express'
import { container } from "tsyringe"
import { UpDateUserAvatarUseCase } from "./UpdateUserAvatarUseCase"

class UpdateUserAvatarController {

    async handle(request: Request, response: Response): Promise<Response>{
       const { id } =  request.user
       const upDateUserAvatarUseCase = container.resolve(UpDateUserAvatarUseCase)
       const avatarFile = null
       await upDateUserAvatarUseCase.execute({ user_id: id, avatarFile })

       return response.status(204).send();
    }

}

export { UpdateUserAvatarController }