import Category from "@/models/CategoryModel";
import CategoryRepository from "@/service/CategoryRepository";
import CategoryType from "@/types/CategoryType";
import { defineStore } from "pinia";

export type RootState = {
  items: Category[];
};


interface CategoryState {
  all: Record<string, CategoryType>
  ids: string[]
}
export const useCategoryMainStore = defineStore({
  id: "categoryStore",
  state: (): CategoryState => ({
    all: {},
    ids: []
  }),

  actions: {
    /*
    createNewItem(item: Category) {
      if (!item) return;

     // this.items.push(item);
    },

    updateItem(id: string, payload: Category) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items = CategoryRepository.findAllCategories();
        return this.items;
      }
    },

    deleteItem(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.items.splice(index, 1);
    },
*/
    findIndexById(id: string) {
     // return this.items.findIndex((item) => item.id === parseInt(id));
    },

    findAll() {
      const mitems = CategoryRepository.findAllCategories();
      console.log("itemsL " + mitems);
      const data: Category[] = CategoryRepository.findAllCategories();

      console.log("items: " + data);
    },
  },
});
