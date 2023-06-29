import { Component, Input, OnInit } from '@angular/core';
import { TaskDetail } from '../task-detail';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() 
  taskDetailObj : TaskDetail = new TaskDetail();
  constructor() {
    this.taskDetailObj.tname = "Start project Task Organizer";
   }

  ngOnInit(): void {
  }

  toString(){
    return this.taskDetailObj.tname;
  }
}
