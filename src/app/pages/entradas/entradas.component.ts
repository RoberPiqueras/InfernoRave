import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Entrada } from '../../common/DescripcionEntradas';
import { DataService } from '../../services/data.service';
import { Evento } from '../../common/Evento'; 

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  eventoData: Evento | undefined;
  entradasData: Entrada[] = [];

  constructor(
    private dataService: DataService,  // Usa el servicio para obtener los datos
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEventoData();
    this.loadEntradasData();
  }

  // Método para cargar los datos del evento
  loadEventoData(): void {
    this.dataService.getEvento().subscribe((evento: Evento) => {
      this.eventoData = evento;  // Asigna los datos del evento
    }, error => {
      console.error('Error al cargar los datos del evento:', error);
    });
  }

  // Método para cargar los datos de las entradas
  loadEntradasData(): void {
    this.dataService.getEntradas().subscribe((entradas: Entrada[]) => {
      this.entradasData = entradas;  // Asigna las entradas
    }, error => {
      console.error('Error al cargar las entradas:', error);
    });
  }

  // Método para navegar a la página de compra de una entrada
  navigateToEntrada(id: number) {
    this.router.navigate(['/entrada', id]);  // Navega a /entrada/{id}
  }
}
