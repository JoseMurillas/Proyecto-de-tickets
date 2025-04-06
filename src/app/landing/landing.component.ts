import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/organisms/header/header.component";
import { FooterComponent } from "./shared/components/organisms/footer/footer.component";

interface Evento {
  nombre: string;
  imagen: string;
  detalles?: string;
}

interface Festival {
  nombre: string;
  ubicacion: string;
  fechas: string;
}

@Component({
  selector: "app-landing",
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent {
  title = "Landing Page";
  searchValue: string = "";

  navLinks = [
    { label: 'CONCIERTOS', href: 'sections/conciertos', className: 'text-orange-500'},
    { label: 'CONTÁCTANOS', href: 'sections/contactanos', className: 'text-orange-500'},
    { label: 'INICIA SESIÓN', href: 'sections/login', className: 'text-orange-500'},
    { label: 'REGÍSTRATE', href: 'sections/register', className: 'text-orange-500'},
  ];

  onSearch(value: string) {
    this.searchValue = value;
    console.log('Search value desde LandingComponent:', this.searchValue);
  }
}
