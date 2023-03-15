import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details-view',
  templateUrl: './employee-details-view.component.html',
  styleUrls: ['./employee-details-view.component.css'],
})
export class EmployeeDetailsViewComponent {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
}
