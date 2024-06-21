import { CalendarEvent } from 'angular-calendar';
import { EventColor, EventAction } from 'calendar-utils';
import { COLOR_LIST } from './constants';

export class TaskDetail implements CalendarEvent {
    id?: string | number | undefined;
    start: Date;
    end?: Date | undefined;
    title: string;
    color?: EventColor = COLOR_LIST.at(0)?.value; 
    actions?: EventAction[] | undefined;
    allDay?: boolean | undefined;
    cssClass?: string | undefined;
    resizable?: { beforeStart?: boolean | undefined; afterEnd?: boolean | undefined; } | undefined;
    draggable?: boolean | undefined;
    meta?: any;

    private _tname: string=""; //same as title from extending interface hence calling a sync function when value is set 
    // the variable _tname can be accessed as tname 
    set tname(value : string){
        this._tname = value; 
        this.syncTitle();
    }

    get tname() : string{
        return this._tname;
    }

    desc?: string; // Optional property

    constructor(calendarEvent? : CalendarEvent) {

        if(calendarEvent!=undefined){
            this.id = calendarEvent?.id;
            this.start = calendarEvent?.start;
            this.end = calendarEvent?.end;
            this.title = this.tname; 
            this.color =   calendarEvent?.color;
            // this.actions = calendarEvent?.actions;
            this.allDay = calendarEvent?.allDay;
            this.cssClass = calendarEvent?.cssClass;
            this.resizable = calendarEvent?.resizable;

            this.tname = calendarEvent.title;
            
        }
        else{
            this.tname = "";
            this.title = this.tname; 
            this.start = new Date(); 
        }

        //default values
        this.draggable = true;
        this.resizable = {
            beforeStart: true,
            afterEnd: true,
        }
        this.actions = [{
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
          }];
    }

    // sync value of title and tname without renaming variables in entire code
    private syncTitle() {
        this.title = this.tname;
    }


}