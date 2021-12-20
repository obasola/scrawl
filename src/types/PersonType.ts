import NoteType from "./NoteType";

interface PersonType {
  id: number
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  gender: string,
  active: boolean,
  dateRecorded: Date,
  dateModified: Date,  
  notes:NoteType[],
  todos:NoteType[];
}
export default PersonType;