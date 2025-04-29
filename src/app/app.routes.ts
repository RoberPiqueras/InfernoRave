import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { EntradaComponent } from './pages/entradas/entrada/entrada.component'; // Componente para mostrar una entrada específica
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent, 
    title: 'Inferno Rave - Landing Page',
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    title: 'Inferno Rave - Home' 
  },
  { 
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent, 
    title: 'Inferno Rave - Sobre Nosotros'
  },
  { 
    path: 'entradas', 
    component: EntradasComponent, 
    title: 'Inferno Rave - Entradas'
  },
  { 
    path: 'entrada/:id', // Ruta dinámica para cargar cada entrada específica
    component: EntradaComponent,
    title: 'Inferno Rave - Entrada'
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent, 
    title: 'Inferno Rave - Checkout' 
  },
  { 
    path: 'contacto', 
    component: ContactoComponent, 
    title: 'Inferno Rave - Contacto' 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    title: 'Inferno Rave - Login' 
  },
  { 
    path: 'registro', 
    component: RegistroComponent, 
    title: 'Inferno Rave - registro' 
  },
  { 
    path: '**',
    component: NotFoundComponent,
    title: 'Inferno Rave - 404 Not Found'
  }
];
