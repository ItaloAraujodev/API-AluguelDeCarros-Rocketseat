import { Category } from '../model/Category'

interface iCreateCategory {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    //Adicionando elementos
    create({ name, description } : iCreateCategory): void {
        const category = new Category();
        // Como se fosse, category.name, category.description etc...
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        })

        this.categories.push(category)
    }

    // Retorno da lista de categorias
    list(): Category[] { 
        return this.categories;
    }

    findByName (name: string): Category {
        const category = this.categories.find(category => category.name === name)
        return category;
    }
}

export { CategoriesRepository }