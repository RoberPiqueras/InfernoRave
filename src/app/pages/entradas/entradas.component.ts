import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EntradasService } from './entradas.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  entradas: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private entradasService: EntradasService) {}

  ngOnInit(): void {
    this.cargarEntradas();
  }

  cargarEntradas(): void {
    this.entradasService.obtenerEntradas().subscribe({
      next: (data) => {
        this.entradas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las entradas';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  comprarEntrada(entrada: any): void {
    // Implementa la lógica para comprar una entrada
    console.log('Comprando entrada:', entrada);
    // Aquí podrías redirigir al checkout o abrir un modal
  }
}