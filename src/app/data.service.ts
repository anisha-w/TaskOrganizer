import { Injectable } from '@angular/core';
import { TaskDetail } from './task-detail';
import { CalendarEvent } from 'calendar-utils';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private taskDetailList: TaskDetail[] = [];
  private calendarEventList: CalendarEvent[] = [];

  constructor() { }

  getCalendarEventList(){
    return this.calendarEventList;
  }

  addcalendarEvent(event : CalendarEvent){
    this.calendarEventList.push(event);
  }
}
