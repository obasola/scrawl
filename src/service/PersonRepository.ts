import http from "../http-commons";
import Person from "../types/PersonType";
import NoteType from "@/types/NoteType";
import { NavigationFailureType } from "vue-router";



class PersonRepository {

  people = [];

  findAllPersons() {
    http.get("/people")
      .then((response) => {
        this.people = response.data;
        console.log(response.data);
        return this.people;
      })
      .catch((e) => {
        console.log(e);
      });   
      return [];    
    }

  getAll(): Promise<any> {
    return http.get("/people");
  }

  get(id: any): Promise<any> {
    return http.get(`/people/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/people", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/people/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/people/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/people`);
  }

  findByEmail(email: string): Promise<any> {
    return http.get(`/people?code=${email}`);
  }

  personRecord: Person = {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName:  "",
    gender: "",
    active: false,
    dateRecorded: new Date,
    dateModified: new Date,  
    notes: [{
      id: 0,
      title: "",
      desc: "",
      dateRecorded: new Date,
      dateModified: new Date,
      personId: 0,  
      categoryId: 0,
    }],
    todos: [{
      id: 0,
      title: "",
      desc: "",
      dateRecorded: new Date,
      dateModified: new Date,
      personId: 0,  
      categoryId: 0
    }]
  };
  mapData(data: Person): Person {
    this.personRecord.id = data.id;
    this.personRecord.email = data.email;
    this.personRecord.password = data.password;
    this.personRecord.firstName = data.firstName;
    this.personRecord.lastName = data.lastName;
    this.personRecord.gender = data.gender;
    this.personRecord.notes = data.notes;
    this.personRecord.todos = data.todos;
    this.personRecord.dateModified = data.dateModified;
    this.personRecord.dateRecorded = data.dateRecorded;
    this.personRecord.id = data.id;
    return this.personRecord;
  }
}

export default new PersonRepository();




