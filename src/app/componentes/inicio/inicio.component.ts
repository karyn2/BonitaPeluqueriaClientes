import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    images: string[] = [ // Array de imágenes
    '/assets/img/mujer3.png',
    '/assets/img/mujer.png',
    '/assets/img/unas1.png'
  ];

  activeIndex: number = 0; // Índice de la imagen activa

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  redireccionarAMaps() {
    // URL de la ubicación específica en Google Maps que se desea redireccionar
    const urlGoogleMaps = 'https://www.google.com/maps/dir/0.8335312,-77.6360831/Bonita+Alta+Peluqueria/@0.8258295,-77.64011,19.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e296d5b50e631f3:0x1e37d968456fa711!2m2!1d-77.6396914!2d0.8256912?hl=es-419&entry=ttu';

    // Abrir la URL en una nueva ventana o pestaña del navegador
    window.open(urlGoogleMaps, '_blank');
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
