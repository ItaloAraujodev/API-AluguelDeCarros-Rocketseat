import { ISpecificationRepositoryInterface, ICreateSpecificationDTO } from "./ISpecificationRepositoryInterface";
import { Specification } from "../model/Specification";

class SpecificationRepository implements ISpecificationRepositoryInterface {
    
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
   
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification
    }
}

export { SpecificationRepository }