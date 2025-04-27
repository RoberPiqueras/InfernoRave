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


});