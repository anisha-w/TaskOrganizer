import { Component, OnInit } from '@angular/core';
import { IcsService } from '../ics.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private icsService: IcsService, private dataService : DataService) {}

  ngOnInit(): void {
  }

  downloadICS(){
    const eventDetails = this.dataService.getCalendarEventList();
    this.icsService.generateICSFile(eventDetails);
  }
}
