import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import HomeComponent from './home/home.component';
import CartaComponent from './carta/carta.component';
import DeliveryComponent from './delivery/delivery.component';
import PideOnlineComponent from './pide-online/pide-online.component';
import SignInComponent from './auth/features/sign-in/sign-in.component';
import MarinosComponent from './pide-online/categorias/marinos/marinos.component';
import CriollosComponent from './pide-online/categorias/criollos/criollos.component';
import BrasasComponent from './pide-online/categorias/brasas/brasas.component';
import PostresComponent from './pide-online/categorias/postres/postres.component';
import ComplementosComponent from './pide-online/categorias/complementos/complementos.component';
import BebidasComponent from './pide-online/categorias/bebidas/bebidas.component';
import TipicosComponent from './pide-online/categorias/tipicos/tipicos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'carta',
        component: CartaComponent
    },
    {
        path: 'delivery',
        component: DeliveryComponent
    },
    {
        path: 'pide-online',
        component: PideOnlineComponent,
        children:[
            {
                path: '',
                redirectTo: 'tipicos',
                pathMatch: 'full'
            },
            {
                path:'tipicos',
                component: TipicosComponent
            },
            {
                path:'marinos',
                component: MarinosComponent
            },
            {
                path:'criollos',
                component: CriollosComponent
            },
            {
                path:'brasas',
                component: BrasasComponent
            },
            {
                path:'postres',
                component: PostresComponent
            },
            {
                path:'complementos',
                component: ComplementosComponent
            },
            {
                path:'bebidas',
                component: BebidasComponent
            },
        ]
    },
    {
        path: 'sign-in',
        component: SignInComponent
    }
];
