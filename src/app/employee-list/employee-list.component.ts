
import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee'
import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];


  constructor(private employeeService: EmployeeService,
    private router: Router) { }



  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
      this.employeeService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
        console.log (this.employees)
      }
      /*{ next: data => this.employees = data ,
        error: ... ,
        finally: ...
      }*/
      );
    }

updateEmployee(id: number){
  console.log (id)
  this.router.navigate(['update-employee', id]);
}

deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id).subscribe( data => {
    console.log(data);
    this.getEmployees();
  })
}

}

/*
ngOnInit(): void {

   this.employees = [{
    "id": 1,
    "firstName": "Ramesh",
    "lastName": "Fadatare",
    "emailId": "ramesh@gmail.com"
  },

  {
  "id": 2,
    "firstName": "John",
    "lastName": "Cena",
    "emailId": "cena@gmail.com"
  }];
*/








