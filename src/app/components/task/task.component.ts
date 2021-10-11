import { Component, Input, OnInit } from '@angular/core';
import { Task } from '@core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() set data(data: Task) {
    this.task = data;
  }

  task: Task | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
