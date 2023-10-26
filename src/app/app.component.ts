import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BonitaPeluqueria';
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  redireccionarWhatsApp() {
   
    const urlwhatsapp = 'https://api.whatsapp.com/send?phone=573177599748&text=Me%20interesa%20agendar%20una%20cita';
    window.open(urlwhatsapp, '_blank');
  }

  redireccionarFacebook() {
    const urlFacebook = 'https://www.facebook.com/bonitaipiales';
    window.open(urlFacebook, '_blank');
  }

  redireccionarInstagram() {
    const urlInstagram = 'https://www.instagram.com/bonita_ipiales/';

    // Abrir la URL en una nueva ventana o pestaña del navegador
    window.open(urlInstagram, '_blank');
  }
}
