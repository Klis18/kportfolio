import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./home/pages/home/home').then(c => c.Home)
    },
    {
        path:'about',
        loadComponent: () => import('./about/pages/about/about').then(c => c.About)
    },
    {
        path:'projects',
        loadComponent: () => import('./projects/pages/projects/projects').then(c => c.Projects)
    },
    {
        path:'**',
        redirectTo:''
    }
];
