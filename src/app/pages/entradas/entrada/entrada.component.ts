import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Entrada } from '../../../common/DescripcionEntradas';
import { DataService } from '../../../services/data.service'; // <-- Importación correcta del servicio

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  entradaId: number = 0;
  entradaData: Entrada | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entradasService: DataService // <-- Uso del servicio correcto
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.entradaId = idParam ? +idParam : 0;
      this.loadEntradaData();
    });
  }

  loadEntradaData(): void {
    this.entradasService.getEntradas().subscribe((data: Entrada[]) => {
      this.entradaData = data.find((e: Entrada) => e.id === this.entradaId);
    });
  }

  goBack(): void {
    this.router.navigate(['/entradas']);
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
