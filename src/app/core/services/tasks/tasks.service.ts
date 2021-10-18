import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('tasks')
      .pipe(
        tap(this.emitTasks),
      );
  }

  emitTasks = (response: Task[]): void => {
    this.tasks.next(response);
  }

  createTask(payload: Task): Observable<Task> {
    return this.http.post<Task>('tasks', payload)
      .pipe(
        tap((task) => this.emitTasks([...this.tasks.value, task])),
      );
  }

  removeTask(id: number): Observable<any> {
    return this.http.delete(`tasks/${id}`)
      .pipe(
        tap(() => this.emitTasks(this.tasks.value.filter(item => item.id !== id))),
      );
  }

  updateTask(payload: Task): Observable<Task> {
    return this.http.put<Task>(`tasks/${payload.id}`, payload)
      .pipe(
        tap((task) => this.emitTasks(this.tasks.value.map(item => item.id === task.id ? task : item))),
      );
  }

  changeStatus(id: number, isCompleted: boolean): Observable<Task> {
    return this.http.patch<Task>(`tasks/${id}`, { isCompleted });
  }
}
