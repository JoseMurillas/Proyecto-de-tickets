import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // Indica que el componente es standalone
  imports: [CommonModule], //  Importa CommonModule para funcionalidades básicas de Angular
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
