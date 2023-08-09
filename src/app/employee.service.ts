import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  //private baseURL = "http://localhost:8080/api/v1";

  //private baseURL!: string // garantia que terá valor typescript
  //private baseURL?: string // pode ser undefined

  //private baseURL2: string | undefined | number

  constructor(private httpClient: HttpClient) { }

  // getEmployeesList(): Observable<Employee[]>{
  //   let texto = this.baseURL ? this.baseURL : 'http://localhost:8080'

  //   let em: Employee = {
  //     id: undefined, firstName: '', emailId: undefined, lastName: undefined
  //   }

    // console.log(`Chamada metodo getEmployees para ${this.baseURL} `)
    // return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
    // return this.httpClient.get<Employee[]>(`${this.baseURL.toLowerCase()}/employees`); //${ }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById (id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  }

