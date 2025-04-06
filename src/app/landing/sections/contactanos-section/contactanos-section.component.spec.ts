import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosSectionComponent } from './contactanos-section.component';

describe('ContactanosSectionComponent', () => {
  let component: ContactanosSectionComponent;
  let fixture: ComponentFixture<ContactanosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactanosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
