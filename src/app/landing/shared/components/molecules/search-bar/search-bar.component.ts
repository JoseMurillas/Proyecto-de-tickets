import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports: [InputComponent, CommonModule, FormsModule],
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  emitSearch() {
    this.search.emit(this.searchText);
  }

  onSearch (event: Event) {
    event.preventDefault();
    this.emitSearch();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.emitSearch();
    }
  }
}
