import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// import { environment } from '../environments/environment'; // Asegúrate de que la ruta sea correcta 



@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent // Asegúrate de que AppComponent esté importado aquí
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar este esquema
})
export class AppModule { }
