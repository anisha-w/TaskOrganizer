import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { TaskDetail } from '../task-detail';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  //@ViewChild('taskcardcontainer', {read: ViewContainerRef}) taskcardcontainerRef!: ViewContainerRef; //object reference for creating new component

  taskArray : TaskDetail[] = [];  //TaskDetail Objects array
  taskListSourceSub$: Subscription = new Subscription;

  @Input() deleteTaskDetailObj : TaskDetail = new TaskDetail();

  constructor(private sharedService: SharedService) { } //injecting service into component

  ngOnInit(): void {
    this.taskListSourceSub$ = this.sharedService.taskListSource$.subscribe(
      (x:{value: TaskDetail, action:string}) => 
        { 
          switch(x.action){
            case 'add' : this.taskArray = this.taskArray.filter((iEvent) => iEvent !== x.value); break;
            case 'delete' : this.taskArray = this.taskArray.filter((iEvent) => iEvent !== x.value); break;
          }
        }
    );
  }

  handleNewTask(taskObj : TaskDetail){
    
    // //Dynamically create component
    // const componentRef = this.taskcardcontainerRef.createComponent<TaskCardComponent>(TaskCardComponent);
    // componentRef.instance.taskDetailObj = taskObj;
    // this.taskCardArray.push(componentRef.instance); // keep track of the components 

    //Keep track of TaskDetail object
    this.taskArray.push(taskObj);
    
  }

  // drop(event: CdkDragDrop<TaskCardComponent[]>) { //when input array was TaskCardComponent[]
  drop(event: CdkDragDrop<TaskDetail[]>) {
    //this.sharedService.drop(event);
    moveItemInArray(this.taskArray, event.previousIndex, event.currentIndex);
  }

  externalDrop(eventObj: any) {
    eventObj.event.tname = eventObj.event.title;
    if (this.taskArray.indexOf(eventObj.event) === -1) {
      this.taskArray.push(eventObj.event);
    }
    this.sharedService.updateCalendarArray(eventObj.event);
  }

  //delete task from list
  handleDeleteEvent(taskObj : TaskDetail){
    this.taskArray = this.taskArray.filter((iEvent) => iEvent !== taskObj);
  }
}
