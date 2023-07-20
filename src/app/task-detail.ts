import { CalendarEvent } from 'angular-calendar';
import { EventColor, EventAction } from 'calendar-utils';

// export interface TaskDetail extends CalendarEvent {
//     //tname: string; //replaced by title from extending interface
//     desc?: string; // Optional property
// }


export class TaskDetail implements CalendarEvent {
    id?: string | number | undefined;
    start: Date;
    end?: Date | undefined;
    title: string;
    color?: EventColor | undefined;
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

    constructor() {
        this.tname = "";
        this.title = this.tname; 
        this.start = new Date(); 
    }

    // sync value of title and tname without renaming variables in entire code
    private syncTitle() {
        this.title = this.tname;
    }

}