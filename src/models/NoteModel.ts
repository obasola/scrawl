import NoteType from "@/types/NoteType";
import BaseModel from "./BaseModel";

export class NoteModel extends BaseModel implements NoteType {
  id            = 0;
  title         = "";
  desc          = "";
  personId      = 0;
  categoryId    = 0;

  constructor(id: number, title: string, desc: string, personId: number, categoryId: number) {
    super();
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.personId = personId;
    this.categoryId = categoryId;
  }
}
export default NoteModel;