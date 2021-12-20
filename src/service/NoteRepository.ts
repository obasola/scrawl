import Note from "@/types/NoteType";
import http from "../http-commons";

const baseUR = "http://localhost:8080"

class NoteRepository {

  noteRecord: Note = {
    id: 0,
    categoryId: 0,
    title: "",
    desc: "",
    dateRecorded: new Date(),
    dateModified: new Date(),
    personId: 0
  };

  notes = [];

  findAllNotes() {
    http.get("/notes")
      .then((response) => {
        this.notes = response.data;
        console.log(response.data);
        return this.notes;
      })
      .catch((e) => {
        console.log(e);
      });
      return [];       
    }

  getAll(): Note{
    http
      .get(baseUR + "/notes")
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.noteRecord;
  }

  get(id: number):Note {
    http
      .get(baseUR + `/note/${id}`)
      .then(response => (
        this.mapData(response.data)
      ))
      .catch(error => console.log(error))
    return this.noteRecord;
  }

  create(data: Response):Note {
    http.post("/note", data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  update(id: number, data: Response):Note {
    http.put(`/note/${id}`, data)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  delete(id: number):void {
    http.delete(`/note/${id}`);
  }

  deleteAll():void {
    http.delete(`/notes`);
  }

  findByCode(code: string):Note{
    http.get(`/note?code=${code}`)
    .then(response => (
      this.mapData(response.data)
    ))
    .catch(error => console.log(error))
    return this.noteRecord;
  }

  mapData(data: Note): Note {
    this.noteRecord.title = data.title;
    this.noteRecord.desc = data.desc;
    this.noteRecord.dateModified = data.dateModified;
    this.noteRecord.dateRecorded = data.dateRecorded;
    this.noteRecord.id = data.id;
    this.noteRecord.personId = data.personId;
    return this.noteRecord;
  }
}
export default new NoteRepository();


