import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
// Instanciando
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description });
    return response.status(201).send();
});


categoriesRoutes.get('/', (request, response) => {
    const findAll = categoriesRepository.list();
    return response.json(findAll);
});


export { categoriesRoutes };
