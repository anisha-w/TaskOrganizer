import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-view-header', //demo Anisha: mwl-demo-utils-calendar-header
  templateUrl: './calendar-view-header.component.html',
  styleUrls: ['./calendar-view-header.component.scss']
})
export class CalendarViewHeaderComponent {

  @Input() view!: CalendarView;

  @Input()
  viewDate!: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
