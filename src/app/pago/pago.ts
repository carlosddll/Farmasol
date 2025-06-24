import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-pago',
  imports: [CommonModule,FormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago {

  carrito = [
    { nombre: 'Vitamina C', precio: 25.9, cantidad: 1 },
    { nombre: 'Omega 3', precio: 39.9, cantidad: 2 },
  ];

  pago = {
    nombre: '',
    tarjeta: '',
    expiracion: '',
    cvv: '',
    guardar: false
  };

  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  pagar() {
    console.log('Procesando pago:', this.pago);
    alert('¡Pago procesado correctamente!');
    // Aquí llamarías a tu servicio backend o pasarela real
  }

}
