import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DEFAULT_DIALOG_CONFIG, Task, TaskDialogData } from '@core';

// Components
import { TaskDialogComponent } from './modals/task-dialog/task-dialog.component';

// Services
import { TasksService } from '@core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks$ = this.tasksService.tasks$;

  constructor(
    private dialog: MatDialog,
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      (data) => {
        console.log('DATA', data);
      },
      (err) => {
        console.log('err: ', err);
      },
      () => {
        console.log('complete');
      }
    );
  }

  identify(index: number, item: Task): number {
    return item?.id;
  }

  addToDo(): void {
    const data: TaskDialogData = {
      mode: 'create',
      title: 'Create TODO',
      actionBtnTitle: 'Create',
    }

    this.dialog.open(TaskDialogComponent, {
      ...DEFAULT_DIALOG_CONFIG,
      data,
    });
  }

  change(value: any) {
    console.log('EMIT', value);
  }
}
