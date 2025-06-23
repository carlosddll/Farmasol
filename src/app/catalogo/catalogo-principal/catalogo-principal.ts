import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto';
import { ProductoModel } from '../../models/producto-model';
import { CarritoService } from '../../services/carrito';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo-principal',
  imports: [RouterModule],
  templateUrl: './catalogo-principal.html',
  styleUrl: './catalogo-principal.css'
})
export class CatalogoPrincipal implements OnInit{
  private productoService = inject(ProductoService); //inyectar el servicio productoService
  private carritoService = inject(CarritoService); // inyectar el servicio carritoService
  productos: ProductoModel[] = [];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      }, error: (e) => {
        console.error(e);
      }
    })
  }

  // metodo agregar un producto al carrito de compras.
  agregarProducto(item: ProductoModel){
    this.carritoService.agregar(item);
  }
 }
