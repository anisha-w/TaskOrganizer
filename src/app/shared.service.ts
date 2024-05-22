import { Injectable } from '@angular/core';
import { TaskDetail } from './task-detail';
import { Subject } from 'rxjs';
import { CalendarEvent } from 'calendar-utils';

interface EventObject{
  value: any;
  action: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private taskListSource = new Subject<EventObject>();
  public taskListSource$ = this.taskListSource.asObservable(); //ANISHA : explain 

  private calendarTaskSource = new Subject<EventObject>();
  public calendarTaskSource$ = this.calendarTaskSource.asObservable(); //ANISHA : explain 

  constructor() { }

  updateTaskArray(value: any) {
    this.taskListSource.next({value,action:'add'});
  }

  updateCalendarArray(value: any) {
    this.calendarTaskSource.next({value,action:'add'});
  }

  deleteTaskFromCalendar(value: any) {
    this.calendarTaskSource.next({value, action:'delete'});
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
