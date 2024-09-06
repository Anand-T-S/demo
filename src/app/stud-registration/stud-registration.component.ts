import { Component } from '@angular/core';
import { StudDatabaseService } from '../Services/stud-database.service';

@Component({
  selector: 'app-stud-registration',
  templateUrl: './stud-registration.component.html',
  styleUrls: ['./stud-registration.component.css']
})
export class StudRegistrationComponent {

  constructor(private studDb: StudDatabaseService) { }

  aim = "Registration Form"

  studData = {
    id: this.studDb.studentDate.length + 1,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',

  }

  // register() {
  //   console.log('clicked', this.studData);

  // }

  Register() {
    // const newstud = {
    //   id:this.studDb.studentDate.length + 1,

    // }
    console.log("click", this.studData);
    if (this.studData.id > this.studDb.studentDate.length) {
      this.studDb.studRegister(this.studData)

    }

  }

}
