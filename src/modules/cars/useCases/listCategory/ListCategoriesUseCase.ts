import { Category } from "../../entities/Category";
import { ICategoryReposiroy } from "../../repositories/ICatetoriesRepository";
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUseCase {

    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoryReposiroy){}

    async execute(): Promise<Category[]>  {
        const categories = await this.categoriesRepository.list();
        return categories
    }
    

}

export { ListCategoriesUseCase }