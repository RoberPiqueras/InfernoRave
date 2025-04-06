import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';  // Importa las rutas definidas en routes.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutamiento
  exports: [RouterModule]  // Exporta el RouterModule para usarlo en todo el app
})
export class AppRoutingModule { }
