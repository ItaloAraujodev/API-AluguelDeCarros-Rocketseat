import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase ){}

    handle(request: Request, response: Response): Response {
        const findAll = this.listCategoriesUseCase.execute();
        return response.json(findAll);
    }

}

export { ListCategoriesController }