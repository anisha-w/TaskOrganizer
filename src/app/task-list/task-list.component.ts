import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

import { TaskDetail } from '../task-detail';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @ViewChild('taskcardcontainer', {read: ViewContainerRef}) taskcardcontainerRef!: ViewContainerRef;

  // taskCardArray : TaskCardComponent[] = [];

  taskArray : TaskDetail[] = [];  //TaskDetail Objects array
  
  constructor() { }

  ngOnInit(): void {
  }

  handleNewTask(taskObj : TaskDetail){
    
    // //Dynamically create component
    // const componentRef = this.taskcardcontainerRef.createComponent<TaskCardComponent>(TaskCardComponent);
    // componentRef.instance.taskDetailObj = taskObj;
    // this.taskCardArray.push(componentRef.instance); // keep track of the components 

    //Keep track of TaskDetail object
    this.taskArray.push(taskObj);
    
  }

  //drop(event: CdkDragDrop<TaskCardComponent[]>) { //when input array was TaskCardComponent[]
  drop(event: CdkDragDrop<TaskDetail[]>) {
    moveItemInArray(this.taskArray, event.previousIndex, event.currentIndex);
  }


}
