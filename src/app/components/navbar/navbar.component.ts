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
  isScrolled = false;
  mobileMenuOpen = false;
  isLoggedIn = false;
  userData: any = null;

  navItems = [
    { path: '/', label: 'INICIO', icon: 'home' },
    { path: '/entradas', label: 'ENTRADAS', icon: 'confirmation_number' },
    { path: '/sobre-nosotros', label: 'SOBRE NOSOTROS', icon: 'groups' },
    { path: '/contacto', label: 'CONTACTO', icon: 'mail' }
  ];

  constructor(private dialog: MatDialog) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }
}