import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFeedbackComponent } from './insert-feedback.component';

describe('InsertFeedbackComponent', () => {
  let component: InsertFeedbackComponent;
  let fixture: ComponentFixture<InsertFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
