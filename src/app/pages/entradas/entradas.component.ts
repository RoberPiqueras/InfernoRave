import { Component } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
  filtro: string = '';
  entradas = [
    {
      nombre: 'Entrada de Prueba',
      descripcion: 'Esta es una entrada de prueba.',
      fecha: '2025-04-10',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Entrada VIP',
      descripcion: 'Acceso exclusivo al evento.',
      fecha: '2025-05-15',
      imagen: 'https://via.placeholder.com/150'
    }
  ];

  get entradasFiltradas() {
    return this.entradas.filter(entrada =>
      entrada.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  comprarEntrada(entrada: any): void {
    console.log('Entrada comprada:', entrada);
  }
}