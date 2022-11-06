import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepositoryInterface {
    create({ name, description }: ICreateSpecificationDTO ):void;
    findByName(name: string): Specification;

}

export { ISpecificationRepositoryInterface, ICreateSpecificationDTO }