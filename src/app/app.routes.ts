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
                path: 'user',
                loadComponent: () => import('./business/user/user.component').then(m => m.UserComponent),
            },
            {
                path: 'user/add',
                loadComponent: () => import('./business/user/user-form/user-form.component').then(m => m.UserFormComponent),
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
