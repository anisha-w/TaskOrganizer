import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

import { TaskDetail } from '../task-detail';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @ViewChild('taskcardcontainer', {read: ViewContainerRef}) taskcardcontainerRef!: ViewContainerRef;

  // taskCardArray : TaskCardComponent[] = [];

  taskArray : TaskDetail[] = [];  //TaskDetail Objects array
  
  constructor(private sharedService: SharedService) { }

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
    this.sharedService.drop(event);
    // moveItemInArray(this.taskArray, event.previousIndex, event.currentIndex);
  }


}
