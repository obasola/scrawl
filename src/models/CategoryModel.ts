import CategoryType from "@/types/CategoryType";
import BaseModel from "./BaseModel";

class CategoryModel extends BaseModel implements CategoryType {

  id = 0;
  code = "";
  desc = "";

  constructor(id: number, code: string, desc: string) {
    super();
    this.desc = desc;
    this.id = id;
    this.code= code;

  }

}
export default CategoryModel;
