import { Category } from '../model/Category'
import { ICategoryReposiroy, ICreateCategory } from '../repositories/ICatetoriesRepository'


class MongoDbCategoriesRepository implements ICategoryReposiroy {
    findByName(name: string): Category {
       console.log(name);
       return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategory): void {
        console.log(name, description);
    }
}


export { MongoDbCategoriesRepository }