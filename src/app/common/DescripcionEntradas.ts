  export interface Testimonial {
    author: string;
    text: string;
  }
  
  export interface Entrada {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: string;
    testimonials: Testimonial[];
  }