import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  entradas: any[] = []; // Almacena las entradas obtenidas de Firebase

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    // Obtener las entradas desde Firebase
    this.firebaseService.getEntradas().subscribe(
      (data) => {
        this.entradas = data; // Asignar los datos obtenidos
      },
      (error) => {
        console.error('Error al obtener las entradas:', error);
      }
    );
  }

  comprarEntrada(entrada: any): void {
    console.log('Entrada comprada:', entrada);
  }
}