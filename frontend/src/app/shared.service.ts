//Shared service between task list and calendar for shared drag drop between them. 

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

  public allCalendarTasks = new Subject<TaskDetail[]>();
  public allCalendarTasks$ = this.allCalendarTasks.asObservable();

  constructor() { }

  updateTaskArray(value: any) {
    this.taskListSource.next(value);
  }

  updateCalendarArray(value: any) {
    this.calendarTaskSource.next(value);
  }

  getAllCalendarTask(){
    return this.allCalendarTasks;
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
