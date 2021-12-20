import Person from "@/models/PersonModel";
import PersonRepository from "@/service/PersonRepository";
import { defineStore } from "pinia";

export type RootState = {
  items: Person[];
};

export const usePersonMainStore = defineStore({
  id: "personMainStore",
  state: () =>
    ({
      items: [],
    } as RootState),

  actions: {
    createNewItem(item: Person) {
      if (!item) return;

      this.items.push(item);
    },

    updateItem(id: string, payload: Person) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items = PersonRepository.findAllPersons();
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
      this.items = PersonRepository.findAllPersons();
    }
  },
});
