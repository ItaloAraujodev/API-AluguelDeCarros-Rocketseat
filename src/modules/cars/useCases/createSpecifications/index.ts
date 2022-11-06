import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

const specificationRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createCategoryController = new CreateSpecificationController(createSpecificationUseCase);

export { createCategoryController };