import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { SharedService } from '../shared.service';
import { TaskDetail } from '../task-detail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private taskService: TaskService, private sharedService: SharedService) {}

  ngOnInit(): void {
  }

  exportFile(){
    const dataFromA = this.sharedService.getAllCalendarTask();
    this.taskService.save(new TaskDetail);
      // this.taskService.exportCalendar(this.user).subscribe(
      // response => {
      //   console.log('Data sent successfully!', response);
      // },
      // error => {
      //   console.error('Error sending data', error);
      // });
  }

}
