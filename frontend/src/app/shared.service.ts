import { Injectable } from '@angular/core';
import { TaskDetail } from './task-detail';
import { Subject } from 'rxjs';
import { CalendarEvent } from 'calendar-utils';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private taskListSource = new Subject<TaskDetail>();
  public taskListSource$ = this.taskListSource.asObservable();

  private calendarTaskSource = new Subject<CalendarEvent>();
  public calendarTaskSource$ = this.calendarTaskSource.asObservable();

  constructor() { }

  updateTaskArray(value: any) {
    this.taskListSource.next(value);
  }

  updateCalendarArray(value: any) {
    this.calendarTaskSource.next(value);
  }

  // public drop(event: CdkDragDrop<TaskDetail[]>) {
  //   // alert(event.previousContainer.id + " "+ event.container.id);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }
}
