import { Routes } from '@angular/router';

export default [
  {
    path: 'deliverysalon',
    loadComponent: () => import('./delivery.component'),
  }
] as Routes;
