import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class DatosService {
  constructor(private http: HttpClient) {}

  // Método para obtener usuarios y roles al mismo tiempo
  getUsuariosYRoles(): Observable<{ usuarios: any[]; roles: any[] }> {
    const usuarios$ = this.http.get<any[]>('assets/users.json');
    const roles$ = this.http.get<any[]>('assets/role.json');
    
    return forkJoin({ usuarios: usuarios$, roles: roles$ });
  }
}
