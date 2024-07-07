import { TestBed } from '@angular/core/testing';

import { IcsService } from './ics.service';

describe('IcsService', () => {
  let service: IcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
