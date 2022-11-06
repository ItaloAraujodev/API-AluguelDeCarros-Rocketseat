import { Category } from "../../model/Category";
import { ICategoryReposiroy } from "../../repositories/ICatetoriesRepository";

class ListCategoriesUseCase {

    constructor(private categoriesRepository: ICategoryReposiroy){}

    execute(): Category[]  {
        const categories = this.categoriesRepository.list();
        return categories
    }
    

}

export { ListCategoriesUseCase }