import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../shared/eventos.service';

@Component({
  selector: 'app-event-detail-section',
  imports: [CommonModule],
  templateUrl: './event-detail-section.component.html',
  styleUrl: './event-detail-section.component.css'
})
export class EventDetailSectionComponent {
  evento: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventosService: EventosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadEvent(id);
    });
  }

  loadEvent(id: string) {
    this.eventosService.getEventoById(id).subscribe((evento) => {
      this.evento = evento;
    });
  }

}
