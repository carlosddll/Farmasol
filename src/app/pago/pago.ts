import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CarritoService } from '../services/carrito';



@Component({
  selector: 'app-pago',
  imports: [CommonModule,FormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago {
  // Variable publica para acceder desde pago.html
  // inyectar el servicio carritoService
  public carritoService = inject(CarritoService); 

  pago = {
    nombre: '',
    tarjeta: '',
    expiracion: '',
    cvv: '',
    guardar: false
  };

  // Accedemos al arreglo del carrito usando el servicio.
  get carrito() {
    return this.carritoService.getCarrito(); // Devuelve el arreglo de productos desde el servicio
  }

  // Calculamos el total
  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }

  // proceso de pago
  pagar() {
    console.log('Procesando pago:', this.pago);                
    alert('¡Pago procesado correctamente!');          
  }
/*
  carrito = [
    { nombre: 'Vitamina C', precio: 25.9, cantidad: 1 },
    { nombre: 'Omega 3', precio: 39.9, cantidad: 2 },
  ];

  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  pagar() {
    console.log('Procesando pago:', this.pago);
    alert('¡Pago procesado correctamente!');
    // Aquí llamarías a tu servicio backend o pasarela real
  }
*/
}
