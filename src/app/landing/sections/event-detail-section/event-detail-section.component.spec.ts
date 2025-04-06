import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailSectionComponent } from './event-detail-section.component';

describe('EventDetailSectionComponent', () => {
  let component: EventDetailSectionComponent;
  let fixture: ComponentFixture<EventDetailSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
