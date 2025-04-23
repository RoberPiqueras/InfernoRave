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
      nombre: 'Fabricamos Fiesta',
      fecha: 'Sábado, 26 de abril',
      imagen: 'assets/eventos/fabricamos-fiesta.png',
      maxEntradas: 5,
      lineup: ['ALBA FRANCH', 'OGALLA', 'ALEX-T', 'DAVID OTX', 'ALEX BEAT', 'DANI POLO', 'GNS']
    },
    {
      nombre: 'Rave Mania',
      fecha: 'Viernes, 3 de mayo',
      imagen: 'assets/eventos/rave-mania.png',
      maxEntradas: 3,
      lineup: ['DJ NITRO', 'LOST', 'K-X', 'LAURA BEAT', 'HARD PULSE']
    },
    {
      nombre: 'Hardstyle Legend',
      fecha: 'Viernes, 10 de mayo',
      imagen: 'assets/eventos/hardstyle-legend.png',
      maxEntradas: 4,
      lineup: ['SILVER', 'BRONZE', 'MARCOS D', 'ELIAS']
    },
    {
      nombre: 'Techno Madness',
      fecha: 'Sábado, 17 de mayo',
      imagen: 'assets/eventos/techno-madness.png',
      maxEntradas: 6,
      lineup: ['TONY X', 'DJ RUSH', 'PAOLA']
    },
    {
      nombre: 'Bass Power',
      fecha: 'Domingo, 24 de mayo',
      imagen: 'assets/eventos/bass-power.png',
      maxEntradas: 7,
      lineup: ['BASS HUNTER', 'DJ KAPPA', 'VICKY ROSE']
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