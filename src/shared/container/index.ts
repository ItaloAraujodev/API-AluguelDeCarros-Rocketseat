import { container } from 'tsyringe';
import { ICategoryReposiroy } from "../../modules/cars/repositories/ICatetoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

//Singleton: 
/**
 * Quando você precisar controlar a concorrência de acesso a recursos compartilhados;
 * Quando uma classe for utilizada com frequência por várias partes distintas do sistema, e essa classe não gerencia nenhum estado da aplicação;
 */

container.registerSingleton<ICategoryReposiroy>(
    "CategoriesRepository", //Nome como vai ser chamado
    CategoriesRepository // Class
)