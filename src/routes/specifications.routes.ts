//Controller recebe nossa requisição e retorna para quem ta chamando ela
import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
})

export { specificationsRoutes }