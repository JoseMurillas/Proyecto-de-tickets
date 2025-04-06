import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link-atom',
  templateUrl: './nav-link-atom.component.html',
  styleUrls: ['./nav-link-atom.component.css'],
  imports: [CommonModule, NgClass, RouterModule],
})
export class NavLinkAtomComponent {
  @Input() label!: string;
  @Input() href!: string;
  @Input() className: string = '';
}
