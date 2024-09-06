import { Component } from '@angular/core';
import { StudDatabaseService } from '../Services/stud-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent {

  constructor(private list:StudDatabaseService, private router:Router) {}

  public studArry: any

  ngOnInit(): void {
    this.studArry = this.list.getStudData()
    console.log(this.studArry);
    
  }

  goToStudView(id:number){
    this.router.navigate(['/list',id]);
  }

}
