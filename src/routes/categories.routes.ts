import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController';
import multer from 'multer'

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();


categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post('/import', upload.single("file"), importCategoryController.handle);


export { categoriesRoutes };
