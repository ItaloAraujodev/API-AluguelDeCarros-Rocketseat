import fs from "fs";
import { parse } from 'csv-parse'
import { ICategoryReposiroy } from "../../repositories/ICatetoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}


class ImportCategoryUseCase {

    constructor(private categoryReposiroy: ICategoryReposiroy){}


    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
           const stream = fs.createReadStream(file.path);
           const categories: IImportCategory[] = [];
           const parseFile = parse()

           stream.pipe(parseFile);
           parseFile.on('data', async (line) => {
           const [name, description ] = line;
           categories.push({name, description});
           })
           .on("end", () => {
            //Removendo o file.path
            fs.promises.unlink(file.path);
            resolve(categories)
        })
        .on('error', (err) => {
            reject(err)
        })
        })
        
    }

    async execute(file: Express.Multer.File): Promise<void>{
      const categories = await this.loadCategories(file)
      categories.map((category) =>  {
        const { name, description } = category;
        const existCategory = this.categoryReposiroy.findByName(name);

        if(!existCategory){
            this.categoryReposiroy.create({
                name,
                description,
            })
        }
      })

    }
}

export { ImportCategoryUseCase }