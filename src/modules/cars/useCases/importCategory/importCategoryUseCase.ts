import fs from "fs";
import { PdfReader } from "pdfreader";

class ImportCategoryUseCase {

    execute(file: Express.Multer.File): void{
       /* const stream = fs.readFileSync(file.path); */
        const pdf = new PdfReader().parseFileItems(file.path, (err: any, item:any) => {
                if (err) console.error("error:", err);
                else if (!item) console.warn("end of file");
                else if (item.text) console.log(item.text);
              });
        

       console.log(pdf)
    }
}

export { ImportCategoryUseCase }