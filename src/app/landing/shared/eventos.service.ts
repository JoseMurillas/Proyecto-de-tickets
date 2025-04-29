import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Evento {
  id: string;
  nombre: string;
  imagen: string;
  detalles?: string;
  width?: string;
  height?: string;
  className?: string;
  gridClasses?: string;
}

interface Festival {
  id?: string;
  nombre: string;
  ubicacion: string;
  fechas: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  tituloPrincipal = '¡BIENVENIDO A TU CONCIERTO YA!';
  subtituloPrincipal = 'La música te espera, tu entrada está aquí.';
  tituloRelevantes = 'RELEVANTES';
  eventosRelevantes: Evento[] = [
    {
      id: 'evento_stereo_2025',
      nombre: 'FESTIVAL ESTÉREO PICNIC 2025',
      imagen: '/assets/img/ca430ff1b2f9e172a220c92cba63a1c36c96a1d0.jpg',
      detalles: '13',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-span-4 col-start-1 row-start-1'
    },
    {
      id: 'evento_shakira_2025',
      nombre: 'SHAKIRA',
      imagen: '/assets/img/af31fece7645faaeb99b460c644bbfa9d8fa5237.jpg',
      detalles: '13',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'row-span-2 col-start-1 row-start-2'
    },
    {
      id: 'evento_reyruiz_2025',
      nombre: 'REY RUIZ',
      imagen: '/assets/img/fabff573ae161951e4d308dfa593acee0a4be0d9.png',
      detalles: '09 MAYO',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-2 row-start-2'
    },
    {
      id: 'evento_francophonie_2025',
      nombre: 'FESTIVAL DE LA FRANCOPHONIE',
      imagen: '/assets/img/2f84937a0bdbf16928a4c5a9cb5f45698be7fdce.png',
      detalles: '15 DE MAYO',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-2 row-start-3'
    },
    {
      id: "evento_andrescalamaro_2025",
      nombre: 'ANDRÉS CALAMARO: TOUR 2025',
      imagen: '/assets/img/bfe39549a060007b430e73fb21880b3c507c3bc2.jpg',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'row-span-2 col-start-3 row-start-2'
    },
    {
      id: "evento_fonseca_2025",
      nombre: 'FONSECA: VIAJANTE TOUR',
      imagen: '/assets/img/7a45a916b2aa204bd851fbf26221d4d001b33039.jpg',
      detalles: '¡SE ACERCAN LOS DÍAS PARA SENTIR DE NUEVO QUE ESTAMOS VIVXS! A PARTIR DEL 20 DE MARZO AL MEDIODÍA, EL ENVÍO DE MANILLAS YA NO ESTARÁ DISPONIBLE.',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-4 row-start-2'
    },
    {
      id: "evento_metallica_2025",
      nombre: 'METALLICA',
      imagen: '/assets/img/5d55b7d9f9d36b364329a9f6dfe6ce1b287a1c20.png',
      detalles: 'GRANDES ÉXITOS',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-4 row-start-3'
    },
    {
      id: 'evento_baum_2025',
      nombre: 'BAUM FESTIVAL',
      imagen: '/assets/img/aa25cee5a1661cfc53af54f4aa6cc622a7dcf4c1.jpg',
      detalles: 'GRANDES ÉXITOS',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-span-4 col-start-1 row-start-4'
    }
  ];

  constructor(private readonly http: HttpClient) {}

  getEventos(): Observable<any> {
    return this.http.get('/assets/concierts.json');
  }

  getEventoById(id: string): Observable<any> {
    return new Observable(observer => {
      this.getEventos().subscribe(eventos => {
        const evento = eventos.find((e: any) => e.id === id);
        observer.next(evento);
        observer.complete();
      });
    });
  }

}
