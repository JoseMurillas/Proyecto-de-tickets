import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
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
            {
                path: '',
                redirectTo: "dashboard",
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '',
        loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent),
    },
    {
      path: '',
      redirectTo: '', // Redirige a Home si la ruta no existe
      pathMatch: 'full'
    }
];
