import { TestBed } from '@angular/core/testing';

import { StudDatabaseService } from './stud-database.service';

describe('StudDatabaseService', () => {
  let service: StudDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
