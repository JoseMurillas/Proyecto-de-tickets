import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true, // Indica que es un componente independiente
  imports: [FormsModule], // Importa FormsModule aquí
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user = {
    nombre: '',
    tipo_documento: '',
    numero_documento: '',
    correo: '',
    telefono: '',
    direccion: '',
    fecha_nacimiento: '',
    sexo: '',
    role: '',
  };

  onSubmit() {
    console.log('Usuario agregado:', this.user);
  }

  closeForm() {
    console.log('Formulario cerrado');
  }
}