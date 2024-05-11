import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskDetail } from './task-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private allTaskUrl: string;
  private testUrl : string;

  constructor(private httpClient: HttpClient) {
    this.allTaskUrl = 'http://localhost:8080/api/alltask';
    this.testUrl = 'http://localhost:8080/api/connectionTest';
  }

  // public findAll(): Observable<TaskDetail[]> {
  //   return this.http.get<TaskDetail[]>(this.allTaskUrl);
  // }

  public save(taskDetail: TaskDetail) {
    return  this.httpClient.post<TaskDetail>(this.testUrl, "sendfromAngular");
    //return this.httpClient.post<TaskDetail>(this.allTaskUrl, taskDetail);
  }

}
