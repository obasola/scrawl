import Note from "@/models/NoteModel";
import NoteRepository from "@/service/NoteRepository";
import { defineStore } from "pinia";

export type RootState = {
  items: Note[];
};

export const useNoteMainStore = defineStore({
  id: "noteMainStore",
  state: () =>
    ({
      items: [],
    } as RootState),

  actions: {
    createNewItem(item: Note) {
      if (!item) return;

      this.items.push(item);
    },

    findAllNotes() {
      this.items.push(
        NoteRepository.getAll()        
      )
    },

    updateItem(id: string, payload: Note) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items = NoteRepository.findAllNotes();
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
      this.items = NoteRepository.findAllNotes();
    }
  },
});
