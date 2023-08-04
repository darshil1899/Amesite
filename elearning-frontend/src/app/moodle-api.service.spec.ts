import { TestBed } from '@angular/core/testing';

import { MoodleApiService } from './moodle-api.service';

describe('MoodleApiService', () => {
  let service: MoodleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
