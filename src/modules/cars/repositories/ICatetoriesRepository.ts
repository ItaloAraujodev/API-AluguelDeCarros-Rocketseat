import { Category } from "../entities/Category";

interface ICreateCategory {
    name: string;
    description: string;
}

interface ICategoryReposiroy {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategory): Promise<void>;
}

export { ICategoryReposiroy, ICreateCategory }