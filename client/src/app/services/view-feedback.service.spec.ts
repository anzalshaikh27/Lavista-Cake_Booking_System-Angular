import { TestBed } from '@angular/core/testing';

import { ViewFeedbackService } from './view-feedback.service';

describe('ViewFeedbackService', () => {
  let service: ViewFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
