import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import multer from 'multer'

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

// Instanciando
/* const categoriesRepository = CategoriesRepository.getInstance(); */

categoriesRoutes.post('/', (request, response) => {
   return createCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response)
});

categoriesRoutes.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response)
});


export { categoriesRoutes };
