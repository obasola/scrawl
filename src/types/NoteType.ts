export default interface NoteType {
  id: number
  title: string,
  desc: string,
  dateRecorded: Date,
  dateModified: Date,
  personId: number,  
  categoryId: number,
}