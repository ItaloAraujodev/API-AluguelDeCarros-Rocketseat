/**
 * Não é de responsabilidade o service reconhecer o RESPONSE, para criar o errro use o throw new Error
 * Não é função do service saber qual é o o array. Exp, categoriesRepository.findByName
 */

import { ICategoryReposiroy } from "../../repositories/ICatetoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    //Inversão de dependências
    constructor(private categoriesRepository: ICategoryReposiroy){}

    execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
        throw new Error("Category already exists !");
    }

     this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }