import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  private apiUrl = 'https://tuapi.com/entradas'; 

  constructor(private http: HttpClient) { }

  obtenerEntradas(): Observable<any[]> {
    return of([
      { nombre: 'Entrada 1', descripcion: 'Descripción 1', fecha: '2023-12-01', imagen: 'imagen1.jpg' },
      { nombre: 'Entrada 2', descripcion: 'Descripción 2', fecha: '2023-12-02', imagen: 'imagen2.jpg' }
    ]);
  }
}

function of(arg0: { nombre: string; descripcion: string; fecha: string; imagen: string; }[]): Observable<any[]> {
  throw new Error('Function not implemented.');
}
