import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


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
    path: 'entradas', 
    component: EntradasComponent, 
    title: 'Inferno Rave - Entradas'
  },
  { 
    path: 'sobre-nosotros', 
    component: SobreNosotrosComponent, 
    title: 'Inferno Rave - Sobre Nosotros'
  },
  { 
    path: 'contacto', 
    component: ContactoComponent, 
    title: 'Inferno Rave - Contacto'
  },
  { 
    path: 'checkout', 
    component: CheckoutComponent, 
    title: 'Inferno Rave - Checkout' 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    title: 'Inferno Rave - Iniciar Sesión' 
  },
  { 
    path: 'registro', 
    component: RegistroComponent, 
    title: 'Inferno Rave - Registro' 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
