import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkAtomComponent } from '../../atoms/nav-link-atom/nav-link-atom.component';
import { Router } from '@angular/router';

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

  constructor(public router: Router) {}

  getClasses(link: NavLink): string {
    const activeClass = this.isActiveLink(link.href)
      ? 'text-orange-500 font-semibold underline'
      : '';
    return `${activeClass}`;
  }

  isActiveLink(href: string): boolean {
    return this.router.url.startsWith(`/${href}`);
  }
}
