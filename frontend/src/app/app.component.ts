import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-organizer-app';
  message: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/hello', {responseType: 'text'})
      .subscribe(data => this.message = data);
    console.log("Anisha message recieved" + this.message);
  }
}
