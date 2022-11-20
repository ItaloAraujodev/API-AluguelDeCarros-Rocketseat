import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoryReposiroy } from "../../modules/cars/repositories/ICatetoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepositoryInterface } from '../../modules/cars/repositories/ISpecificationRepositoryInterface';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

//Singleton: 
/**
 * Quando você precisar controlar a concorrência de acesso a recursos compartilhados;
 * Quando uma classe for utilizada com frequência por várias partes distintas do sistema, e essa classe não gerencia nenhum estado da aplicação;
 */

container.registerSingleton<ICategoryReposiroy>(
    "CategoriesRepository", //Nome que vai ser chamado
    CategoriesRepository // Class
)

container.registerSingleton<ISpecificationRepositoryInterface>(
    "SpecificationRepository", //Nome que vai ser chamado
    SpecificationRepository // Class
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository 
)