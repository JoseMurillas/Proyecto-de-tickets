import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkAtomComponent } from '../../atoms/nav-link-atom/nav-link-atom.component';

interface NavLink {
  label: string;
  href: string;
  className?: string;
  active?: boolean;
}

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  imports: [CommonModule, NavLinkAtomComponent],
})
export class NavLinksComponent {
  @Input() links: NavLink[] = [];
}
