import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Entrada } from '../common/DescripcionEntradas';
import { Evento } from '../common/Evento';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlData = 'data/entradas.json'; 

  constructor(private http: HttpClient) {}

  getEvento(): Observable<Evento> {
    return this.http.get<any>(this.urlData).pipe(
      map(data => data.evento as Evento)
    );
  }

  getEntradas(): Observable<Entrada[]> {
    return this.http.get<any>(this.urlData).pipe(
      map(data => data.entradas as Entrada[])
    );
  }

  getEntradaById(id: number): Observable<Entrada> {
    return this.getEntradas().pipe(
      map(entradas => {
        const entrada = entradas.find(e => e.id === id);
        if (!entrada) {
          throw new Error('No se encontró la entrada con el id: ' + id);
        }
        return entrada;
      })
    );
  }
}
