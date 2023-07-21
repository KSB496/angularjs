import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmpserviceService } from './services/empservice.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud';

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'exp',
    'package'
  ];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _dialog: MatDialog, private es:EmpserviceService){}

  ngOnInit(): void{
    this.loadUser()
  }
  openAddEditForm(){
    this._dialog.open(EmpAddEditComponent)
  }
  loadUser(){
    this.es.loadEmployeeFromDB().subscribe({
      next:(data)=>{
      console.log(data)
      //this.dataSource=new MatTableDataSource(JSON.parse(JSON.stringify(data)))
      //this.dataSource=new MatTableDataSource(data)
    },
    error:console.log})
  }
}
