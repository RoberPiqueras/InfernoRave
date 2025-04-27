import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Importa los componentes standalone
import { AppComponent } from './app.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // Importa los componentes standalone aquí
    AppComponent,
    CheckoutComponent,
    LandingPageComponent,
    HomeComponent,
    ContactoComponent,
    EntradasComponent,
    SobreNosotrosComponent,
    LoginComponent,
    RegistroComponent
  ],
  providers: [],
  schemas: [] // Asegúrate de que el componente principal sea el AppComponent
})
export class AppModule { }
