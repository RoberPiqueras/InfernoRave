import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from '../interfaces/entrada'; // Ajustada la ruta relativa

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'assets/eventos.json';  // Aquí puedes usar la URL de tu API o archivo local

  constructor(private http: HttpClient) { }

  // Método para obtener todos los eventos
  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  // Método para obtener un evento por su título
  getEventoByTitulo(titulo: string): Observable<Evento> {
    return this.http.get<Evento[]>(this.apiUrl).pipe(
      map((eventos: Evento[]) => eventos.find(evento => evento.titulo === titulo)!)
    );
  }
}
