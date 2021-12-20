import NoteType from "../types/NoteType";
import PersonType from "../types/PersonType";
import BaseModel from "./BaseModel";

class PersonModel extends BaseModel implements PersonType {
  id              = 0;
  email           = "";
  password        = "";
  firstName       = "";
  lastName        = "";
  gender          = "";
  active          = false;
  notes:NoteType[] = [];
  todos:NoteType[] = [];

  constructor(id: number, email: string, pswd: string, fname: string, lname: string, sex: string, active: boolean) {
    super();
    this.id = id;
    this.email = email;
    this.password = pswd;
    this.active = active;
    this.firstName = fname;
    this.lastName = lname;
    this.gender = sex;

  }
  setNotes(notes:NoteType[]): void {
    this.notes = notes;
  }

  setTodos(todos:NoteType[]): void {
    this.todos = todos;
  }
}

export default PersonModel;