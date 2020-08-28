import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmployeeServiceService} from './services/employee-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViswaProject';
  employeeForm: FormGroup;
  employeeArray:[]
  dis:boolean=false
  constructor(private empservice:EmployeeServiceService){

  }
  ngOnInit() {
    this.employeeForm = new FormGroup({
      'id': new FormControl(null, []),
      'firstname': new FormControl(null,[]),
      'lastname': new FormControl(null, []),
    });
 
  }
  onSubmit(){
   // console.log(this.employeeForm.value);
    this.empservice.postAlldata(this.employeeForm.value).subscribe((data)=>{
      console.log(data);
    })
  }
  display(){
    this.empservice.getAllEmployees().subscribe((data)=>{
      console.log(data);
      this.employeeArray=data;
    })
  }
  delete(){
    this.empservice.deleteEmpdata(this.employeeForm.value).subscribe((data)=>{
      console.log(data);
    })
  }
  save(){
  }
}
