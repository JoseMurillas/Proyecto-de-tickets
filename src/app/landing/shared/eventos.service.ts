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
      imagen: 'https://s3-alpha-sig.figma.com/img/ca43/0ff1/b2f9e172a220c92cba63a1c36c96a1d0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JZcdkGNywH1TicoIZm58JG~SDK83OLMvcRbb484UZvCNaQyQRSbq-yALD~Wq6dQB2NFT-LO0zH6LyG5Zw-OTRwGVHuoEqYhTCtyAUgGJoQWhcnz5dpLF-8djWUK7DnyqpFdHeB~gRsTX7neIeiXWsi6Ml3QAdNZm3ZoqAdJEtG1FCCmJY68g8AhiedLNI-51s0a1WMU1kmDrU4BZD9XWL9bwaoueQI8uRzrAuezXgKBnGAFaplStfY71SqaP9pH4VZMGcmM4~iAPzTKtW96sakQVPTaBRnD2sbhvmbW9nGsvMAVGL-NdKpODjnM3SLN4ZaGFr4Q5KAk73fhMpPzPlQ__',
      detalles: '13',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-span-4 col-start-1 row-start-1'
    },
    {
      id: 'evento_shakira_2025',
      nombre: 'SHAKIRA',
      imagen: 'https://s3-alpha-sig.figma.com/img/af31/fece/7645faaeb99b460c644bbfa9d8fa5237?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b5A0HBbzU21tGsGU3iBT~0zCncviORtB6WsgE7la3ehhRZOGf2iPiBUypDmaq6oEJDhHXZJiVLRl5Mf6K2QtDc6d~bKB-uwCTv1JNUl-cVaGOsCjABTbJyZ6UJe3y9QkCtYM2jit2mQGdk4TY6CukpHyiRzY8vYhtO7ZipYhvKT~oYbsJx2arky7G7Bo~-JIlIJHpLQwjDoK6GLjaT01BWCPLTrPqu9G8MLsEBGoUfT2LihOc~mYyifT5tyOkyZxyHvMfXKMC7PC0~8wGc2I50ebw7K6u93i-chWYC4GBEYARJwnZURs63Vr~4GsdqVXRbf3Qswkf2F9xpnyMpVvww__',
      detalles: '13',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'row-span-2 col-start-1 row-start-2'
    },
    {
      id: 'evento_reyruiz_2025',
      nombre: 'REY RUIZ',
      imagen: 'https://s3-alpha-sig.figma.com/img/fabf/f573/ae161951e4d308dfa593acee0a4be0d9?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UCd6F7iNAeUd-4P3E7uCYvOVcVaw0zuhVshsvJipgHZ~5ZlYS92LcoPTkAhXnSKCSl4t7DcdBLg8EbfohDUITKUl1FGEFoqOTAbDQe1npXxiEOfGG7sby5e-aLJOSCDvn0KTwEEJvP5-047Y3GjQnNi9L3-V~yXT2OVIUZigpA1mCsgNajjrDJGQuC7I9RC1dJmBC55jgE3yIibL5kysSItXPixyiGa0v5wixcP9xmHvEeRXESl6UQVi94dGnX1Z8bME5sBsTF94w6hcHIZ685DMUC52gmCWE6AW6-c7ctp-kMx8d7nkJzLDmhmsgHeGRSCK0tZndRA6pOUXn~AHXw__',
      detalles: '09 MAYO',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-2 row-start-2'
    },
    {
      id: 'evento_francophonie_2025',
      nombre: 'FESTIVAL DE LA FRANCOPHONIE',
      imagen: 'https://s3-alpha-sig.figma.com/img/2f84/937a/0bdbf16928a4c5a9cb5f45698be7fdce?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fWojxH-l-5IaYQlBEx5RTqjom2OU0vmFcH3H3ASCCjCncEUkui-g2pGoKQcdGJ8EIL1uRHaarRmd8rQUe64rjaNHQsfC--AYElxt2U18rdUc2VisK54hrduYZP5XHbEU7I4MGJEUhGxxQVz~UGboD5kYQeWdMKggRU0Bz8otvBvIKOBv5thYwjwr48~pZB99Sd1NyfKqWaUvt-zSnwWwoueiJoqk-C6E5bh~s5KVEaHrTOZoIq8qBveFVQ38x8erWPYxCXQ0A65txRtekT4MqM4RSQHBg-rsJGDNYXlDrhkbEElEe-mpEBm8kFJ8hpahMdOljKW7NMQlI0vCVIebSQ__',
      detalles: '15 DE MAYO',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-2 row-start-3'
    },
    {
      id: "evento_andrescalamaro_2025",
      nombre: 'ANDRÉS CALAMARO: TOUR 2025',
      imagen: 'https://s3-alpha-sig.figma.com/img/bfe3/9549/a060007b430e73fb21880b3c507c3bc2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ThcujnMYkTw9qxZIhztVpAuynVjkpTKpWicz9aXv2tbfNvPmApw58nzOh9h0kfIPTpyOEZEDd6IrCn5~2QBQpZRjASppQa6uki6JYNb9TI5yBJ1qFreNUJ7WSW9ZhhHiXthLOheJTxmeudG-gPZyAD0adXndCkKDFsv7MLo4W1lFeBtnMLR8PBJYyrLEi4bL7Ku3ALafyoQyq-nPw-RHJaW9taPBRhJupQaVWfADuhjWdYhEtwkOcYBt6gG3NDZDxDiCJBbJxcKrCsgxNLPmVoYmFmbSs6VzDzhpvAvGI0poVltsBrAlGvqp6jKZmwtvreU6RtqYL8TP6T1R6A2Y7w__',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'row-span-2 col-start-3 row-start-2'
    },
    {
      id: "evento_fonseca_2025",
      nombre: 'FONSECA: VIAJANTE TOUR',
      imagen: 'https://s3-alpha-sig.figma.com/img/7a45/a916/b2aa204bd851fbf26221d4d001b33039?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ajSxwV7gp11VUbb~Z64gWb-kUOIHzj8sHnKV-y0VqH7OX45oe1z-0VigUI7qNnDp1QcrUIjaVJ0vtVXAjxEfkcVxqwq0Zr-XOk0YjFLpfvA4IYPzfdKvFondoH87G~lM3GEVm7u3v~IjB28w0L2pIkLHxQ2HZq49eGuW~jijWy3E9x7PWuHvUM3f3Hz8L3vGe-VfiGO~EyT9~cXcYO08-rfj6s-c7djmeyWVYIyCvGvmIPb21vsSvi3jJRNDVCSbT7vta2Q4TtURaz1jWOFigacX44l6ZOk-In28bV-xOpPrt7kmFI~rMe85GWHj4mJlyPck4k82LfAE9Uzn0aKdAA__',
      detalles: '¡SE ACERCAN LOS DÍAS PARA SENTIR DE NUEVO QUE ESTAMOS VIVXS! A PARTIR DEL 20 DE MARZO AL MEDIODÍA, EL ENVÍO DE MANILLAS YA NO ESTARÁ DISPONIBLE.',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-4 row-start-2'
    },
    {
      id: "evento_metallica_2025",
      nombre: 'METALLICA',
      imagen: 'https://s3-alpha-sig.figma.com/img/5d55/b7d9/f9d36b364329a9f6dfe6ce1b287a1c20?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UHhBtzJ4dW~DTQsBno-m~SpRj5L6rvnTkyaemk-56eoj0SZEWR5IzUgqRfEIaq6bzEuhhtss--bUOPWZNAmIGBXJGMiEjYQrRbI83R-FoYx3nyPCu7hBN3D9zUwNalb5gtXTcCo5w0s3lydpDt2oe7wkhnsvfIC2Cw7klqpyQijECGmJTLfqAID~rWRnpVPMPth~xpHGORU2RPLK~W4vxtLMmhtdmI4pEl97WmEFyiGFCeZvZFu2PmIoEo2YupJNRE7ebre7XIP9LkgLqwH~E2RuEjgO~xNIaC~yxNPGnLmTXq0xyQq9qO0598IKeu5r5-hY6BgUrNDMtOOfpKco~A__',
      detalles: 'GRANDES ÉXITOS',
      width: '198',
      height: '295',
      className: 'w-48 h-72',
      gridClasses: 'col-start-4 row-start-3'
    },
    {
      id: 'evento_baum_2025',
      nombre: 'BAUM FESTIVAL',
      imagen: 'https://s3-alpha-sig.figma.com/img/aa25/cee5/a1661cfc53af54f4aa6cc622a7dcf4c1?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YWzP6SjjfdiO9OCb6g6tMI5aSpPMc4cWIklTZFawWMutLhNIccuLJ1OlOEiszcx4t9EdueJ9~1~kQdgykjOu-aA6eYObs~ANRJZDtFrNVyKyOpf-c0L7ynTBP~FJYLF1b0IibMtjyNX77Bi2NbAUb3Xo0Rm8nxpk-SPO2A9AWiOTCcLIQDSHRzVwCUV4AUsvX1-SOkzf~gC5bNcnFR1MAR9gN0fdrjU8NAWGJCK0DpmjdY97~7DytBkXJKV1aMsHRKjIlOSWx-R1OsHZGE2eO9vEVqba9ClngVIamVNkEQDW-Ud9ySyYXaAyl3QndlZ6ryaWLzlMh5~Kd8uxQYuKDw__',
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
