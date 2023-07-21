import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpserviceService } from '../services/empservice.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm:FormGroup

  constructor(private fb:FormBuilder, private es:EmpserviceService, private dr:DialogRef<EmpAddEditComponent>){
   
    this.empForm=this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      exp:'',
      package:''
    })
    this.loadUser()
  }
  education:string[] = [
    'Diploma','Bachelors','Masters','Phd'
  ]
  addUser(){
    //console.log(this.empForm.value)
    this.es.addEmployee(this.empForm.value).subscribe((data)=>{
      //console.log(data);
      alert(data);
      this.dr.close()
    })
  }
  loadUser(){
    this.es.loadEmployeeFromDB().subscribe((data)=>{
      console.log(data)
    })
  }
}
