import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskDetail } from '../task-detail';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {

  constructor(private sharedService: SharedService) { 
    this.defaultT.tname = "defaultTask";
  }

  ngOnInit(): void {
  }

  taskArray : TaskDetail[] = [];  //TaskDetail Objects array
  defaultT: TaskDetail = new TaskDetail;

  drop(event: CdkDragDrop<TaskDetail[]>) {
    this.sharedService.drop(event);
  }
  

}
