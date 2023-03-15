import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees?: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    // this.employees = [
    //   {
    //     id: 1,
    //     firstName: 'Yugesh',
    //     lastName: 'akuri',
    //     mailId: 'yugesh@gmail.com',
    //     description: 'Good team player',
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Yugesh',
    //     lastName: 'Vardhan',
    //     mailId: 'vardhan@gmail.com',
    //     description: 'Good team player',
    //   },
    // ];
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
      console.log(this.employees);
    });
    return this.employees;
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
