export class BaseModel{
  dateRecorded: Date;
  dateModified: Date;

  constructor() {
    this.dateRecorded = new Date();
    this.dateModified = new Date();
  }
}

export default BaseModel;