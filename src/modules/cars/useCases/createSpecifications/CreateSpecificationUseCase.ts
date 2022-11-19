import { ISpecificationRepositoryInterface } from '../../repositories/ISpecificationRepositoryInterface'
import { inject, injectable } from 'tsyringe'

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
           throw new Error('Name already exists')
        }
        
        await this.specificationRepository.create({
            name, 
            description,
        })
    }
}

export { CreateSpecificationUseCase }