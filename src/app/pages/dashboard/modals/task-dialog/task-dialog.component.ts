import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TaskDialogData, TasksService, Task } from '@core';

@Component({
  selector: 'task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  form: FormGroup | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private fb: FormBuilder,
    private tasksService: TasksService,
  ) { }

  ngOnInit(): void {
    if (this.data.mode !== 'delete') {
      this.initForm();
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: [this.data?.task?.title || null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]],
      description: [this.data?.task?.description || null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120),
      ]],
    });
  }

  action(): void {
    const payload: Task = {
      id: this.data?.task?.id || Date.now(),
      title: this.form?.value?.title,
      description: this.form?.value?.description,
      isCompleted: this.data?.task?.isCompleted || false,
      createDate: this.data?.task?.createDate || Date.now(),
      updateDate: this.data.mode === 'create' ? null : Date.now(),
    };

    switch (this.data.mode) {
      case 'create':
        this.tasksService.createTask(payload)
          .subscribe(() => this.dialogRef.close());
        break;
      case 'edit':
        this.tasksService.updateTask(payload)
          .subscribe(() => this.dialogRef.close());
        break;
      case 'delete':
        this.tasksService.removeTask(payload.id)
          .subscribe(() => this.dialogRef.close())
        break;
    }
  }
}
