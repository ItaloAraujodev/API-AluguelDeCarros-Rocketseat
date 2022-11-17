/**
 * Não é de responsabilidade o service reconhecer o RESPONSE, para criar o errro use o throw new Error
 * Não é função do service saber qual é o o array. Exp, categoriesRepository.findByName
 */

import { inject, injectable } from 'tsyringe';
import { ICategoryReposiroy } from "../../repositories/ICatetoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable() // Agora essa classe pode ser injetada, tipo, o controller pode chamar ela
class CreateCategoryUseCase {
    //Inversão de dependências
    constructor(
        @inject("CategoriesRepository") // Agora não precisar mais usar o New para instanciar, o tsyringe faz isso agora
        private categoriesRepository: ICategoryReposiroy){}
    

    async execute({ name, description }: IRequest): Promise<void> {
        
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
        throw new Error("Category already exists !");
    }

     this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }