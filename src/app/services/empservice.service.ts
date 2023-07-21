import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http:HttpClient) { }

  addEmployee(data:any){
    return this.http.post('http://localhost:4196/empdata',data)
  }

  loadEmployeeFromDB(){
    return this.http.get('http://localhost:4196/empdata')
  }
}
