import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { TaskDetail } from '../task-detail';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  tname : any;
  currTask : TaskDetail;
  @Output() taskDetailEmit: EventEmitter<TaskDetail> = new EventEmitter<TaskDetail>(); //create a event called taskDetailEmit; this is the name of the event that can be triggered

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
}
