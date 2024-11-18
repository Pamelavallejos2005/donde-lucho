import { Routes } from '@angular/router';

export default [
  {
    path: 'homesalon',
    loadComponent: () => import('./home.component'),
  }
] as Routes;
