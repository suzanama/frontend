import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from './../employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id: number = 0;
  employee: Employee = new Employee(); // property employ from Employee class
  constructor(private employeeService: EmployeeService,  // inject EmployeeService
    private route: ActivatedRoute,
    private router: Router) { }

    minhavar: any = true;
    minhavar2: boolean = true

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.minhavar = "null as any;"
    this.minhavar2 = null as any;

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

    onSubmit() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data  => {
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }



}
