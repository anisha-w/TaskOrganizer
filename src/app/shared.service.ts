import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskDetail } from './task-detail';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  public drop(event: CdkDragDrop<TaskDetail[]>) {
    // alert(event.previousContainer.id + " "+ event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
