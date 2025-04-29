import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos ActivatedRoute y Router
import { CommonModule } from '@angular/common'; // Importamos CommonModule si es standalone

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  entradaId: number = 0;  // Para almacenar el ID de la entrada
  entradaData: any = null;  // Para almacenar los datos de la entrada

  // Usamos ActivatedRoute para acceder a los parámetros de la ruta
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Capturamos el parámetro 'id' de la URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.entradaId = idParam ? +idParam : 0;  // Convertimos 'id' a número o usamos 0 como valor predeterminado
      this.loadEntradaData();  // Cargamos los datos de la entrada usando el ID
    });
  }

  // Simulamos la carga de datos para cada entrada
  loadEntradaData(): void {
    // Puedes sustituir esta lógica con un servicio para obtener datos de un API o similar
    const entradas = [
      { id: 1, title: 'Entrada básica', description: 'Acceso básico al evento INFERNORAVE. Disfruta de la mejor música hardcore y technohardcore con nuestra entrada estándar.' },
      { id: 2, title: 'Entrada premium', description: 'Acceso premium con consumición incluida y zona preferente. Vive la experiencia INFERNORAVE con comodidades adicionales.' },
      { id: 3, title: 'Entrada vip', description: 'La experiencia completa con acceso VIP, zona reservada, 2 consumiciones y meet & greet con los DJs. Exclusividad total.' },
      { id: 4, title: 'Entrada grupal', description: 'Entrada para 4 personas con acceso a zona especial de grupo. Perfecto para venir con amigos y disfrutar juntos de la mejor música hardcore.' },
      { id: 5, title: 'Abono', description: 'Acceso a los 3 días de festival con todos los beneficios premium. La forma definitiva de experimentar INFERNORAVE en su totalidad.' },
    ];

    // Buscamos la entrada correspondiente por ID
    this.entradaData = entradas.find(entrada => entrada.id === this.entradaId);
  }

  // Función para redirigir al usuario de vuelta a la lista de entradas
  goBack() {
    this.router.navigate(['/entradas']);  // Redirige a la página de entradas
  }

  checkout() {
    this.router.navigate(['/checkout']);  
  }
}