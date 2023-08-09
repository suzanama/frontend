import { EmployeeService } from './../employee.service';
import { EmployeeListComponent } from './../employee-list/employee-list.component';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee(); // property employ from Employee class
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));

  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
