/**
 * Não é de responsabilidade o service reconhecer o RESPONSE
 * Não é função do service saber qual é o o array. Exp, categoriesRepository.findByName
 */

import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    //Inversão de dependências
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
        throw new Error("Category already exists !");
    }

     this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }