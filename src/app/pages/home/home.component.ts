import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component'; // Importa el componente Footer

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent], // Importa los componentes independientes
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}