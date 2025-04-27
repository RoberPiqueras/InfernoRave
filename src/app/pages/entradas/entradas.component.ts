import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradasService, Entrada } from '../../entradas.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  entradas: Entrada[] = [];  // Para almacenar las entradas cargadas desde el JSON

  constructor(private entradasService: EntradasService, private router: Router) {}

  ngOnInit(): void {
    this.entradasService.getEntradas().subscribe(entradas => {
      this.entradas = entradas; // Asignamos las entradas cargadas al array
    });
  }

  // Función para redirigir al detalle de la entrada seleccionada
  irAEntrada(id: number): void {
    this.router.navigate([`/entrada/${id}`]);  // Navegar a la página de detalle de entrada con el ID
  }
}
