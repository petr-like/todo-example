import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  DEFAULT_DIALOG_CONFIG,
  Task,
  TaskDialogData,
  TasksService,
} from '@core';

import { TaskDialogComponent } from '../modals/task-dialog/task-dialog.component';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() data: Task | undefined;
  @Output() change = new EventEmitter();

  statusControl = new FormControl();

  constructor(private dialog: MatDialog, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.statusControl.setValue(this.data?.isCompleted);
    this.statusControl.valueChanges
      .pipe(
        filter(() => !!this.data?.id),
        switchMap((value: boolean) => {
          this.change.emit(value);
          return this.tasksService.changeStatus(this.data?.id as number, value);
        })
      )
      .subscribe();
  }

  onEdit(): void {
    const data: TaskDialogData = {
      mode: 'edit',
      task: this.data,
      title: 'Edit TODO',
      actionBtnTitle: 'Edit',
    };

    this.dialog.open(TaskDialogComponent, {
      ...DEFAULT_DIALOG_CONFIG,
      data,
    });
  }

  onRemove(): void {
    const data: TaskDialogData = {
      mode: 'delete',
      task: this.data,
      title: 'Remove TODO',
      actionBtnTitle: 'Remove',
    };

    this.dialog.open(TaskDialogComponent, {
      ...DEFAULT_DIALOG_CONFIG,
      data,
    });
  }
}
