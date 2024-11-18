import { Routes } from '@angular/router';

export default [
  {
    path: 'cartasalon',
    loadComponent: () => import('./carta.component'),
  }
] as Routes;
