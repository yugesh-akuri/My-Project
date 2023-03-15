import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // saveEmployee() {
  //   this.employeeService.createEmployee(this.employee).subscribe();
  //   // (data) => {
  //   //   console.log(data);
  //   // },
  //   // (error) => console.log(error)
  // }

  //   onSubmit() {
  //     console.log(this.employee);
  //     this.saveEmployee();
  //   }

  addEmployee() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe();
    this.gotoEmployeeList();
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
