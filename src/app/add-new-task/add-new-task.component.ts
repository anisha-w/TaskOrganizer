import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { TaskDetail } from '../task-detail';
import { EventColor } from 'calendar-utils';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { COLOR_LIST } from '../constants';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
  providers: [NgbDropdownConfig]
})
export class AddNewTaskComponent implements OnInit {

  tname : any;
  currTask : TaskDetail;
  @Output() taskDetailEmit: EventEmitter<TaskDetail> = new EventEmitter<TaskDetail>(); //create a event called taskDetailEmit; this is the name of the event that can be triggered

  colorList = COLOR_LIST;
  currLabelColor = this.colorList.at(0)?.value.primary;
  dropdownOpen: boolean = false;


  constructor(){
    this.currTask = new TaskDetail();
  }

  ngOnInit(): void {
  }

  addNewComponent() {
    this.currTask.tname = this.tname;
    this.taskDetailEmit.emit(this.currTask); //This is where the event gets triggered; event name : taskDetailObj ; emit object/$event : currTask when triggered
    //reset field 
    this.tname = '';
    this.currTask = new TaskDetail();
  }

  applyColor(color : EventColor){
    this.currTask.color = color;
    this.currLabelColor = color.primary;
  }
}
