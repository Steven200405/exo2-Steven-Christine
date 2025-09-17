import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
    {path: '', component: Accueil},
    {path: 'accueil', component: Accueil},
    {path: 'liste', component: Liste},
    {path: 'gestion', component: Gestion},
    {path: '**', redirectTo: "accueil"}
];
