import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos ActivatedRoute y Router
import { CommonModule } from '@angular/common'; // Importamos CommonModule si es standalone

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  entradaId: number = 0;  // Para almacenar el ID de la entrada
  entradaData: any = null;  // Para almacenar los datos de la entrada

  ngOnInit(): void {
    // Implementación inicial de ngOnInit
    console.log('checkoutcomponent initialized');
  }

  // Usamos ActivatedRoute para acceder a los parámetros de la ruta
  constructor(private route: ActivatedRoute, private router: Router) {}


  // Función para redirigir al usuario de vuelta a la lista de entradas
  goBack() {
    this.router.navigate(['/entradas']);  // Redirige a la página de entradas
  }

}