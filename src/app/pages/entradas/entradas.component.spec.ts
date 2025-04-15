import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradasComponent } from './entradas.component';
import { CommonModule } from '@angular/common';

describe('EntradasComponent', () => {
  let component: EntradasComponent;
  let fixture: ComponentFixture<EntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], // Importa CommonModule si es necesario
      declarations: [EntradasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default entradas array', () => {
    expect(component.entradas).toBeDefined();
    expect(component.entradas.length).toBe(0); // Si no hay datos iniciales
  });

  it('should call comprarEntrada and log the entrada', () => {
    const entrada = { nombre: 'Test Entrada', descripcion: 'Test Descripción', fecha: '2025-04-10', imagen: 'test.jpg' };
    spyOn(console, 'log');
    component.comprarEntrada(entrada);
    expect(console.log).toHaveBeenCalledWith('Entrada comprada:', entrada);
  });
});