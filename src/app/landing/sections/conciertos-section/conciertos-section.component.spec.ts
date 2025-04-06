import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciertosSectionComponent } from './conciertos-section.component';

describe('ConciertosSectionComponent', () => {
  let component: ConciertosSectionComponent;
  let fixture: ComponentFixture<ConciertosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConciertosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConciertosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
