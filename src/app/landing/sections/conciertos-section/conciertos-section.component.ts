import { Component } from '@angular/core';
import { EventosService } from '../../shared/eventos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conciertos-section',
  imports: [CommonModule],
  templateUrl: './conciertos-section.component.html',
  styleUrl: './conciertos-section.component.css'
})
export class ConciertosSectionComponent {
  tituloPrincipal = '';
  subtituloPrincipal = '';
  tituloRelevantes = '';
  eventosRelevantes: { nombre: string; detalles: string; imagen: string; gridClasses: string }[] = [];
  baumFestival: any = {};

  constructor(private readonly eventosService: EventosService) {}

  ngOnInit(): void {
    this.tituloPrincipal = this.eventosService.tituloPrincipal;
    this.subtituloPrincipal = this.eventosService.subtituloPrincipal;
    this.tituloRelevantes = this.eventosService.tituloRelevantes;
    this.eventosRelevantes = this.eventosService.eventosRelevantes.map(evento => ({
      nombre: evento.nombre,
      detalles: evento.detalles ?? 'Detalles no disponibles',
      imagen: evento.imagen,
      gridClasses: evento.gridClasses ?? '',
    }));
    this.baumFestival = this.eventosService.baumFestival;
  }
}
