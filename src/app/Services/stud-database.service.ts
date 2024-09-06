import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudDatabaseService {

  constructor() { }

  studentDate = [
    {
      id: 1,
      firstName: 'athul',
      lastName: 'ks',
      dateOfBirth: '2024-08-08',
      address: 'dkjjk'
    },
    {
      id: 2,
      firstName: 'joy',
      lastName: 'joy',
      dateOfBirth: '2020-08-11',
      address: 'jfgfgk'
    },
    {
      id: 3,
      firstName: 'kevin',
      lastName: 'kevin',
      dateOfBirth: '2020-08-11',
      address: 'jkgrgr'
    },
    {
      id: 4,
      firstName: 'adam',
      lastName: 'adams',
      dateOfBirth: '2020-08-11',
      address: 'jk'
    },
    {
      id: 5,
      firstName: 'eve',
      lastName: 'eve',
      dateOfBirth: '2020-08-11',
      address: 'jk'
    },
    {
      id: 6,
      firstName: 'jhon',
      lastName: 'jhon',
      dateOfBirth: '2020-08-11',
      address: 'jgrwegk'
    },
  ]

  getStudData(): Observable<any> {
    return <any>this.studentDate
  }

  //studview
  getItemById(id: any) {
    return this.studentDate.find(stud => stud.id == id)
  }

  //registration
  studRegister(newstud: {
    id: number, firstName: string,
    lastName: string, dateOfBirth: string, address: string
  }) {
    this.studentDate.push(newstud);
    console.log(this.studentDate);

  }


}
