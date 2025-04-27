import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradasService, Entrada } from '../../../entradas.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  entrada: Entrada | undefined;  // Para almacenar los detalles de la entrada seleccionada

  constructor(
    private route: ActivatedRoute,
    private entradasService: EntradasService,
    private router: Router  // Importamos Router para la navegación
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.entradasService.getEntradaPorId(id).subscribe((entrada) => {
      this.entrada = entrada;
    });
  }

  // Función para regresar a la lista de entradas
  goBack(): void {
    this.router.navigate(['/entradas']);  // Navega a la página de Entradas
  }
}
