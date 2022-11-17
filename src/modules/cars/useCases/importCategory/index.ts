import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

/* const categoryReposiroy = CategoriesRepository.getInstance(); */
const categoryReposiroy = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoryReposiroy);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }