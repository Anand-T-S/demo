import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudDatabaseService } from '../Services/stud-database.service';
import { style } from '@angular/animations';
// import * as printJS from 'print-js';

@Component({
  selector: 'app-stud-view',
  templateUrl: './stud-view.component.html',
  styleUrls: ['./stud-view.component.css']
})
export class StudViewComponent implements OnInit {

  id: number | undefined;

  stud: { id: number, firstName: string, lastName: string, address: string } | undefined

  imageSrc: string|ArrayBuffer |null = null;

  name: any;

  profile: any;


  constructor(private route: ActivatedRoute, private data: StudDatabaseService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params =>{
    //   this.id = +params.get('id');
    // })
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id
    }

    //get item by id
    this.stud = this.data.getItemById(id)

    //printprofile
    // this.data.studentDate.getprofile()

  }

  //image upload
  onFileChange(event: any){
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    if(file) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imageSrc = e.target.result;   
      };
      reader.readAsDataURL(file);
    }

  }

  // saveProfile() {
  //   if(this.stud){
  //     console.log(typeof(this.stud));
      
  //     this.name = JSON.stringify(this.stud);
  //     console.log(typeof(this.name));
      
  //     console.log(this.name);
      
  //   }
    
  // }

  preview() {
    const printWindow = window.open('','_blank');
    printWindow?.document.write(`<html><head><title>print form</title><style>
      .card{
        position:absolute;
        border: 2px solid red;
        width: 300px;
        height: 300px;
        left: 100px;
        padding-top: 20px;
        padding-left: 40px;
    }
    .img-div{
        border: 1px solid black;
        width: 200px;
        height: 150px;
    }
    
    #profile-pic{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 195px;
        height: 140px;
    }</style>`);
    printWindow?.document.write('</head><body>');
    printWindow?.document.write(`
      <div class="card">
    <div class="img-div">
        <img src="${this.imageSrc}" alt="Upload Image" id="profile-pic">
    </div>
    <div>
        <h4>${this.stud?.firstName} &nbsp; ${this.stud?.lastName}</h4>
        <p>${this.stud?.address}</p>
    </div>
</div>
      `);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }


// preview() {
//   const printWindow = window.open('','_blank');
//   printWindow?.document.write(`<html><head><title>print form</title>`);
//   printWindow?.document.write('</head><body>');
//   printWindow?.document.write(this.stud?.address);
//   printWindow?.document.write('</body></html>');
//   printWindow?.document.close();
//   printWindow?.focus();
//   printWindow?.print();
// }

//print function
// printProfile(): void{
//   printJS({
//     printable: "printSection",
//     type: 'html',
//     targetStyle: ['*']
//   })
// }
}
