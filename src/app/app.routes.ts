import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';

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
    path: 'app', 
    redirectTo: '', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];