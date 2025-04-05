import { Component } from "@angular/core";
import { HeaderComponent } from "./shared/components/organisms/header/header.component";
import { FooterComponent } from "./shared/components/organisms/footer/footer.component";

@Component({
  selector: "app-landing",
  imports: [HeaderComponent, FooterComponent],
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent {
  title = "Landing Page";
  searchValue: string = "";

  navLinks = [
    { label: 'CONCIERTOS', href: '#', className: 'text-orange-500' },
    { label: 'CONTÁCTANOS', href: '#', className: 'text-orange-500' },
    { label: 'INICIA SESIÓN', href: '#', className: 'text-lime-400' },
    { label: 'REGÍSTRATE', href: '#', className: 'text-lime-400' },
  ];

  onSearch(value: string) {
    this.searchValue = value;
    console.log('Search value desde LandingComponent:', this.searchValue);
  }
}
