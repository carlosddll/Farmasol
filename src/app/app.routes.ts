import { RedirectCommand, Routes } from '@angular/router';
import { CatalogoPrincipal } from './catalogo/catalogo-principal/catalogo-principal';
import { CarritoPrincipal } from './carrito/carrito-principal/carrito-principal';
import { Home } from './page/home/home';
import { Nosotros } from './page/nosotros/nosotros';
import { Contacto } from './page/contacto/contacto';
import { Pago } from './pago/pago';

export const routes: Routes = [
    { path:'' , component: CatalogoPrincipal },
    {path:'carrito' , component: CarritoPrincipal},
    {path:'productos', component:CatalogoPrincipal},
    {path:'nosotros', component:Nosotros},
    {path:'contacto', component:Contacto},
    {path:'pago', component:Pago}
];
