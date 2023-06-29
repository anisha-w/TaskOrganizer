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
  @Output() taskDetailObj: EventEmitter<TaskDetail> = new EventEmitter<TaskDetail>(); //create a eventemitter object called taskDetailObj

  constructor(){
    this.currTask = new TaskDetail();
  }

  ngOnInit(): void {
  }

  addNewComponent() {
    this.currTask.tname = this.tname;
    this.taskDetailObj.emit(this.currTask); //emit currTask
    //reset field 
    this.tname = '';
    this.currTask = new TaskDetail();
  }
}
