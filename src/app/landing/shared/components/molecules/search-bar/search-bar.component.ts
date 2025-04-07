import { Component, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventosService } from '../../../eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  imports: [InputComponent, CommonModule, FormsModule],
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';
  results: any[] = [];
  allConcerts: any[] = [];

  constructor(private readonly eventosService: EventosService, private router: Router, private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.results = [];
    }
  }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((data) => {
      this.allConcerts = data;
      this.results = [];
    });
  }

  emitSearch() {
    this.search.emit(this.searchText);
  }

  onInputChange() {
    const query = this.searchText.toLowerCase().trim();
    if (!query) {
      this.results = [];
      return;
    }

    this.results = this.allConcerts.filter(concert =>
      concert.evento.nombre.toLowerCase().includes(query)
    );
  }

  goToConcert(id: string) {
    this.results = [];
    this.searchText = '';
    this.router.navigate(['/sections/conciertos', id]);
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
