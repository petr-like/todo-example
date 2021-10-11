import { Component, OnInit } from '@angular/core';
import { TasksService } from '@core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks$ = this.taskService.tasks$;

  constructor(
    private taskService: TasksService,
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks();
  }
}
