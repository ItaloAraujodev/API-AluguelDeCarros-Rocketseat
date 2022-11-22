import { ISpecificationRepositoryInterface } from '../../repositories/ISpecificationRepositoryInterface'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError';

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepositoryInterface ){}
    
    async execute({ name, description }: IRequest): Promise<void>  {
        const specificationAlreadyExists = await this.specificationRepository.findByName(name);
        
        if(specificationAlreadyExists){
           throw new AppError('Name already exists')
        }
        
        await this.specificationRepository.create({
            name, 
            description,
        })
    }
}

export { CreateSpecificationUseCase }