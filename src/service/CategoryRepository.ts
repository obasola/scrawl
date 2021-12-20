import { ref } from "vue";
import http from "../http-commons";
import Category from "../types/CategoryType";



class CategoryRepository {

  category = {
    id: 0,
    code: "",
    name: "",
    dateModified: new Date(),
    dateRecorded: new Date(),
  };

  categories = [];

  findAllCategories() {
    http.get("/categories")
      .then((response) => {
        this.categories = response.data;
        console.log(response.data);
        return this.categories;
      })
      .catch((e) => {
        console.log(e);
      });  
      return [];  
  }

  getAll(): Promise<any> {
    return http.get("/categories");
  }

  get(id: any): Promise<any> {
    return http.get(`/categories/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/categories", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/categories/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/categories/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/categories`);
  }

  findByCode(code: string): Promise<any> {
    return http.get(`/categories?code=${code}`);
  }

  categoriesRecord: Category = {
    code: "",
    desc: "",
    dateModified: new Date(),
    dateRecorded: new Date(),
    id: 0
  };
  mapData(data: Category): Category {
    this.categoriesRecord.code = data.code;
    this.categoriesRecord.desc = data.desc;
    this.categoriesRecord.dateModified = data.dateModified;
    this.categoriesRecord.dateRecorded = data.dateRecorded;
    this.categoriesRecord.id = data.id;
    return this.categoriesRecord;
  }
}

export default new CategoryRepository();




