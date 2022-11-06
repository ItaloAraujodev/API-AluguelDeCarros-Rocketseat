// Repositorio e responsavel por fazer toda manipulação de nossa aplicação
// Fazer acesso ao banco de dados
// Fazer os cadastros, selects 
// A rota chama o respositorio e o repositorio fazer a inserção ao banco de dados

/* 1- as rotas existem apenas e unicamente para atender as requisições
2- os repositórios existem apenas e unicamente para fazer operações para guardar e prover os dados persistidos. */


import { Category } from '../../model/Category'
import { ICategoryReposiroy, ICreateCategory } from '../ICatetoriesRepository'


class CategoriesRepository implements ICategoryReposiroy {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    //Adicionando elementos
    create({ name, description } : ICreateCategory): void {
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