import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  private jsonUrl = 'assets/data/entradas.json'; // ✅ RUTA ACTUALIZADA

  constructor(private http: HttpClient) {}

  getEntradas(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
