import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EventosService } from '../../shared/eventos.service';

@Component({
  selector: 'app-event-detail-section',
  standalone: true, 
  imports: [CommonModule, RouterModule],  
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
    const id = this.route.snapshot.paramMap.get('id');
    this.eventosService.getEventoById(id!).subscribe(data => {
      this.evento = data;
    });
  }
}
