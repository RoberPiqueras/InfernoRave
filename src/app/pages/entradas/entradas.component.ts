import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-entradas',
  standalone: true,
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {

  constructor(private router: Router) {}

  // Función para manejar la navegación
  navigateToEntrada(id: number) {
    this.router.navigate(['/entrada', id]); // Navega a /entrada/{id}
  }
}
