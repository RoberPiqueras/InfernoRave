import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private collectionName = 'entradas'; // Nombre de la colección en Firestore

  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las entradas
  getEntradas(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }
}