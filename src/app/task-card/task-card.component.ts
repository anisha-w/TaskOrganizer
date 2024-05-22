import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TaskDetail } from '../task-detail';
import { CalendarEvent } from 'calendar-utils';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() taskDetailObj : TaskDetail = new TaskDetail();
  @Output() deleteTaskDetailEvent :  EventEmitter<TaskDetail> = new EventEmitter<TaskDetail>();
  
  
  constructor(private sharedService: SharedService) {
    this.taskDetailObj.tname = "Start project Task Organizer"; //default ; gets overwritten by the input
   }


  ngOnInit(): void {
    this.taskDetailObj.actions = [
      {
        label:  '<i class="fas fa-fw fa-pencil-alt"></i>', //'<button> Edit </button>',
        a11yLabel: 'Edit',

        onClick: ({ event }: { event: CalendarEvent}): void => {
          alert("Anisha Edit TODO "); //TODO 
          //this.deleteTaskDetailObj.emit(this.taskDetailObj);

        },
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: 'Delete',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          alert("Anisha Delete Works ");
          this.sharedService.deleteTaskFromCalendar(this.taskDetailObj);
          this.deleteTaskDetailEvent.emit(this.taskDetailObj);
        },
      },
    ];
  }

  toString(){
    return this.taskDetailObj.tname;
  }
}
