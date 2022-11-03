import { Category } from "../model/Category";

interface ICreateCategory {
    name: string;
    description: string;
}

interface ICategoryReposiroy {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategory): void;
}

export { ICategoryReposiroy, ICreateCategory }