import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-link-atom',
  templateUrl: './nav-link-atom.component.html',
  styleUrls: ['./nav-link-atom.component.css'],
  imports: [CommonModule, NgClass],
})
export class NavLinkAtomComponent {
  @Input() label: string = '';
  @Input() href: string = '#';
  @Input() className: string = '';
}
