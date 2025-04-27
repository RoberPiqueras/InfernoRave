import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Importamos map desde rxjs/operators

export interface Entrada {
  id: number;
  title: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class EntradasService {
  private apiUrl = 'assets/data/entradas.json';  // Ruta donde está tu archivo JSON

  constructor(private http: HttpClient) {}

  // Función que obtiene todas las entradas desde el JSON
  getEntradas(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.apiUrl);
  }

  // Función que obtiene una entrada por su ID
  getEntradaPorId(id: number): Observable<Entrada | undefined> {
    return this.getEntradas().pipe(
      map(entradas => entradas.find(entrada => entrada.id === id))  // Usamos map correctamente para buscar por ID
    );
  }
}
