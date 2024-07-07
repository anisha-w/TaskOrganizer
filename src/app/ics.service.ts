import { Injectable } from '@angular/core';
import { createEvents } from 'ics';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class IcsService {

  constructor() { }

  generateICSFile(eventsDetails: any[]) {
    const events: any[] = [];

    eventsDetails.forEach(eventDetails => {
      const { start, end, title, desc } = eventDetails; //Anisha : TODO
      const event = {
        start: this.formatDateForICS(start), // [year, month, day, hour, minute]
        duration: this.calculateDuration(start,end), // { hours: x, minutes: y }
        title: title,
        description: desc,
        //location: location,
        //url: url,
        //organizer: organizer, // { name: 'Organizer Name', email: 'Organizer Email' }
        //attendees: attendees, // [{ name: 'Attendee Name', email: 'Attendee Email' }]
      };
      events.push(event);
    });

    createEvents(events, (error,value) => {
      if (error) {  
        console.log(error);
        return;
      }
      this.saveICSFile(value);
    });
  }

  saveICSFile(content: string) {
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    saveAs(blob, 'events.ics');
  }

  formatDateForICS(date: Date): [number, number, number, number, number] {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based in JavaScript
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return [year, month, day, hour, minute];
  }

  calculateDuration(startDate: Date, endDate: Date): { hours: number, minutes: number } {
    if(endDate==null){
      return {hours : 0,minutes : 30};
    }
    const diffMs = endDate.getTime() - startDate.getTime();
    const diffMins = Math.floor(diffMs / 60000); // Convert milliseconds to minutes
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    return { hours, minutes };
  }
}
