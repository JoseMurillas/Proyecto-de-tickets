import { Component } from '@angular/core';
import { FooterContactComponent } from '../../molecules/footer-contact/footer-contact.component';
import { FooterSocialComponent } from '../../molecules/footer-social/footer-social.component';
import { FooterServicesComponent } from '../../molecules/footer-services/footer-services.component';

@Component({
  selector: 'app-footer',
  imports: [FooterContactComponent, FooterSocialComponent, FooterServicesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
