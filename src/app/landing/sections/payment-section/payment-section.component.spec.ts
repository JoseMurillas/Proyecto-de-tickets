import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSectionComponent } from './payment-section.component';

describe('PaymentSectionComponent', () => {
  let component: PaymentSectionComponent;
  let fixture: ComponentFixture<PaymentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
