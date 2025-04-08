import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../shared/eventos.service';

@Component({
  standalone: true,
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.css'],
  imports: [CommonModule] 
})
export class PaymentSectionComponent implements OnInit {
  evento: any;
  cantidadEntradas: number = 1;

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventosService.getEventoById(id!).subscribe(data => {
      this.evento = data;
    });
  }

  aumentar() {
    this.cantidadEntradas++;
  }

  disminuir() {
    if (this.cantidadEntradas > 1) this.cantidadEntradas--;
  }

  obtenerTotal() {
    return (this.evento?.valorEntrada || 0) * this.cantidadEntradas;
  }
}
