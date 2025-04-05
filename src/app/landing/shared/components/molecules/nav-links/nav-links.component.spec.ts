import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksComponent } from './nav-links.component';

describe('NavLinksComponent', () => {
  let component: NavLinksComponent;
  let fixture: ComponentFixture<NavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
