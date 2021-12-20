import Category from "@/models/CategoryModel";
import CategoryRepository from "@/service/CategoryRepository";
import { defineStore } from "pinia";

export type RootState = {
  items: Category[];
};

export const useCategoryMainStore = defineStore({
  id: "categoryMainStore",
   state: () =>
    ({
      items: [],
    } as RootState),

  actions: {
    createNewItem(item: Category) {
      if (!item) return;

      this.items.push(item);
    },

    updateItem(id: string, payload: Category) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items = CategoryRepository.findAllCategories();
      }
    },

    deleteItem(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    findIndexById(id: string) {
      return this.items.findIndex((item) => item.id === parseInt(id));
    },

    findAll() {
      this.items = CategoryRepository.findAllCategories();
    }
  },
});
