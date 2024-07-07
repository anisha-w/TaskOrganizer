import { Component, OnInit } from '@angular/core';
import { IcsService } from '../ics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private icsService: IcsService) {}

  ngOnInit(): void {
  }

  downloadICS(){
    const startDate = new Date(2024, 6, 10, 6, 30);
    const endDate = new Date(2024, 6, 10, 7, 30); 
    const eventDetails = [{
      start: startDate,
      end : endDate,
      title: 'Sample Event',
      description: 'This is a sample event description',
      location: 'Online',
      url: 'https://example.com',
      organizer: { name: 'Organizer Name', email: 'organizer@example.com' },
      attendees: [
        { name: 'Attendee One', email: 'attendee1@example.com' },
        { name: 'Attendee Two', email: 'attendee2@example.com' }
      ]
    }];
    this.icsService.generateICSFile(eventDetails);
  }
}
