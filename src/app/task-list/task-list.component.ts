import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskDetail } from '../task-detail';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @ViewChild('tasklistcontainer', {read: ViewContainerRef}) tasklistcontainerRef!: ViewContainerRef;

  taskCardArray : TaskCardComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleNewTask(taskObj : TaskDetail){
    //alert(taskObj.tname);
    const componentRef = this.tasklistcontainerRef.createComponent<TaskCardComponent>(TaskCardComponent);
    componentRef.instance.taskDetailObj = taskObj;
    this.taskCardArray.push(componentRef.instance); // keep track of the components 
  }

}
