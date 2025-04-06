import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
                data: { title: 'Inicio' }
            },
            {
                path: 'events',
                loadComponent: () => import('./business/events/events.component').then(m => m.EventsComponent),
                data: { title: 'Eventos' }
            },
            {
                path: 'user',
                loadComponent: () => import('./business/user/user.component').then(m => m.UserComponent),
                data: { title: 'Usuarios' }
            },
            {
                path: 'user/add',
                loadComponent: () => import('./business/user/user-form/user-form.component').then(m => m.UserFormComponent),
                data: { title: 'Agregar Usuario' }
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
      redirectTo: '', 
      pathMatch: 'full'
    }
];
