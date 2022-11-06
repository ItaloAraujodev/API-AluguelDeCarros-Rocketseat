import { ISpecificationRepositoryInterface } from '../../repositories/ISpecificationRepositoryInterface'

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepositoryInterface ){}
    
    execute({ name, description }: IRequest):void  {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
        
        if(specificationAlreadyExists){
           throw new Error('Name already exists')
        }
        
        this.specificationRepository.create({
            name, 
            description,
        })
    }
}

export { CreateSpecificationUseCase }