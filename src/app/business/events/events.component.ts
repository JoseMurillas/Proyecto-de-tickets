import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [CommonModule, HttpClientModule], 
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventos: any[] = []; // Aquí se almacenarán los eventos cargados

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Cargar el archivo JSON desde la carpeta assets
    this.http.get<any[]>('/assets/concierts.json').subscribe((data) => {
      this.eventos = data;
    });
  }

  editarEvento(evento: any): void {
    console.log('Editar evento:', evento);
    // Aquí puedes redirigir a un formulario de edición o abrir un modal
  }

  eliminarEvento(eventoId: string): void {
    console.log('Eliminar evento con ID:', eventoId);
    // Aquí puedes implementar la lógica para eliminar el evento
    this.eventos = this.eventos.filter((evento) => evento.id !== eventoId);
  }

  verDetalles(evento: any): void {
    console.log('Ver detalles del evento:', evento);
    // Aquí puedes redirigir a una página de detalles o abrir un modal
  }
}