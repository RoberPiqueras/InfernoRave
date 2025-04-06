import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false; // Indica si la página está desplazada
  mobileMenuOpen = false; // Controla si el menú móvil está abierto
  isLoggedIn = false; // Indica si el usuario ha iniciado sesión
  userData: any = null; // Datos del usuario (si es necesario)

  // Elementos del menú de navegación
  navItems = [
    { path: '/', label: 'INICIO', icon: 'home' },
    { path: '/entradas', label: 'ENTRADAS', icon: 'confirmation_number' },
    { path: '/sobre-nosotros', label: 'SOBRE NOSOTROS', icon: 'groups' },
    { path: '/contacto', label: 'CONTACTO', icon: 'mail' }
  ];

  constructor(private dialog: MatDialog) {}

  // Detecta el desplazamiento de la ventana para cambiar el estado de la barra de navegación
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Alterna el estado del menú móvil
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }
}