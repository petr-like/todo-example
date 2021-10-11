import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '@core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasks.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getTasks() {
    this.http.get<Task[]>('tasks')
      .pipe(
        tap(this.emitTasks),
      )
      .subscribe();
  }

  emitTasks = (response: Task[]): void => {
    this.tasks.next(response);
  }
}
