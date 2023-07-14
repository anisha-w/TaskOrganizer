import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewHeaderComponent } from './calendar-view-header.component';

describe('CalendarViewHeaderComponent', () => {
  let component: CalendarViewHeaderComponent;
  let fixture: ComponentFixture<CalendarViewHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarViewHeaderComponent]
    });
    fixture = TestBed.createComponent(CalendarViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
