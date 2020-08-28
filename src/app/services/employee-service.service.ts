import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Employee} from '../employee'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.httpClient.get(' http://localhost:3000/employees');
  }
  postAlldata(emp:Employee):Observable<any>{
    return this.httpClient.post('http://localhost:3000/employees',emp);
  }
  deleteEmpdata(emp:Employee):Observable<any>{
    return this.httpClient.delete('http://localhost:3000/employees/'+emp.id);
  }
}
