import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EntradasService } from '../../../entradas.service';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  entradaId: number = 0;
  entradaData: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entradasService: EntradasService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.entradaId = idParam ? +idParam : 0;
      this.loadEntradaData();
    });
  }

  loadEntradaData(): void {
    this.entradasService.getEntradas().subscribe(entradas => {
      this.entradaData = entradas.find(e => e.id === this.entradaId);
    });
  }

  goBack() {
    this.router.navigate(['/entradas']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
