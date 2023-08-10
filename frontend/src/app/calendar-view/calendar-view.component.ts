import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskDetail } from '../task-detail';
import { SharedService } from '../shared.service';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

// import { EventColor } from 'calendar-utils';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  //Anisha : Check
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        //this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>(); //Anisha

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors.red},
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: { ...colors.yellow },
    //   actions: this.actions,
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: { ...colors.blue },
    //   allDay: true,
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: addHours(new Date(), 2),
    //   title: 'A draggable and resizable event',
    //   color: { ...colors.yellow },
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true,
    //   },
    //   draggable: true,
    // },
  ];

  activeDayIsOpen: boolean = true;

  calendarTaskSourceSub$: Subscription = new Subscription;
  
  constructor(private sharedService: SharedService, private modal: NgbModal) { 
    this.defaultT.tname = "defaultTask";
  }

  ngOnInit(): void {
    this.calendarTaskSourceSub$ = this.sharedService.calendarTaskSource$.subscribe(
      (x: CalendarEvent) => (this.events = this.events.filter((iEvent) => iEvent!== x)) // JSON.stringify(iEvent) !== JSON.stringify(x) 
    );
  }

  taskArray : TaskDetail[] = [];  //TaskDetail Objects array
  defaultT: TaskDetail = new TaskDetail;

  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd,}: CalendarEventTimesChangedEvent): void {
    //const task = new TaskDetail(event);
    const task =event;
    if(!this.events.includes(task)){
      task.start = newStart;
      task.end = newEnd;
      this.events = [...this.events , task ];
      this.sharedService.updateTaskArray(task);
    }
    else{
     
      this.events = this.events.map((iEvent) => {
          if (iEvent === task) {
            iEvent.start = newStart;
            iEvent.end = newEnd;
          }
          return iEvent;
        });
    }
    //this.handleEvent('Dropped or resized', event);

  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' }); //ANISHA
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
