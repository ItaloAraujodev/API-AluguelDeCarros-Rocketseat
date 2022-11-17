// Repositorio e responsavel por fazer toda manipulação de nossa aplicação
// Fazer acesso ao banco de dados
// Fazer os cadastros, selects 
// A rota chama o respositorio e o repositorio fazer a inserção ao banco de dados

/* 1- as rotas existem apenas e unicamente para atender as requisições
2- os repositórios existem apenas e unicamente para fazer operações para guardar e prover os dados persistidos. */


import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category'
import { ICategoryReposiroy, ICreateCategory } from '../ICatetoriesRepository'


class CategoriesRepository implements ICategoryReposiroy {

    private repository: Repository<Category>

    /* private static INSTANCE: CategoriesRepository; */

    constructor() {
        this.repository = getRepository(Category)
    }

    /* public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    } */

    //Adicionando elementos
    async create({ name, description } : ICreateCategory): Promise<void> {
        const category = this.repository.create({
            name,
            description
        });
        await this.repository.save(category);
    }

    // Retorno da lista de categorias
    async list(): Promise<Category[]> { 
        const categories = await this.repository.find();
        return categories
    }

    async findByName (name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository }