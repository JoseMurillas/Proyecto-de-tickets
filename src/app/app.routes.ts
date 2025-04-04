import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        //Ruta del Home separada de los componentes del dashboard
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), // Home sin layout
    },
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component'),
            },
            {
                path: 'tables',
                loadComponent: () => import('./business/tables/tables.component'),
            },
        ]
    },
    {
        path: '',
        redirectTo: '', // Redirige a Home si la ruta no existe
        pathMatch: 'full'
        
    }
];