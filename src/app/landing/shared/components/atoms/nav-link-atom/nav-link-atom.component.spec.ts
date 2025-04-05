import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkAtomComponent } from './nav-link-atom.component';

describe('NavLinkAtomComponent', () => {
  let component: NavLinkAtomComponent;
  let fixture: ComponentFixture<NavLinkAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkAtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinkAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
