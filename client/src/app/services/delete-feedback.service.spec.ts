import { TestBed } from '@angular/core/testing';

import { DeleteFeedbackService } from './delete-feedback.service';

describe('DeleteFeedbackService', () => {
  let service: DeleteFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
