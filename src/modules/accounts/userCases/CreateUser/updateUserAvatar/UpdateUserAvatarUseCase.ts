/**
 * [] - Adicionar coluna avatar na tabela de users
 * [] - Refatorar usuario com coluna avatar
 * [] - config Upload multer
 * [] - Regra de negocio do upload
 * [] - Criar o controller
 */

import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../repositories/IUsersRepository";


interface IRequest {
    user_id: string;
    avatarFile: string;
}

@injectable()
class UpDateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
        ){}

    async execute({ user_id, avatarFile }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        user.avatar = avatarFile;

        await this.usersRepository.create(user);
    }
}

export { UpDateUserAvatarUseCase }