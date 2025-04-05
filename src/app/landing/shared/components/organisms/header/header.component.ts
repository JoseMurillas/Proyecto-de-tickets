import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLinksComponent } from '../../molecules/nav-links/nav-links.component';
import { SearchBarComponent } from '../../molecules/search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NavLinksComponent, SearchBarComponent],
})
export class HeaderComponent {
  @Input() links: any[] = [];

  @Output() search = new EventEmitter<string>();

  handleSearch(value: string) {
    this.search.emit(value);
  }
}
