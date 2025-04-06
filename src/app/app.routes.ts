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
        children: [
          {
            path: 'sections/conciertos',
            loadComponent: () => import('./landing/sections/conciertos-section/conciertos-section.component').then(m => m.ConciertosSectionComponent),
            pathMatch: 'full'
          },
          {
            path: 'sections/conciertos/:id',
            loadComponent: () => import('./landing/sections/event-detail-section/event-detail-section.component').then(m => m.EventDetailSectionComponent),
            pathMatch: 'full'
          },
          {
            path: 'sections/contactanos',
            loadComponent: () => import('./landing/sections/contactanos-section/contactanos-section.component').then(m => m.ContactanosSectionComponent),
            pathMatch: 'full'
          },
          { path: '', redirectTo: 'sections/conciertos', pathMatch: 'full' },
          {
            path: 'login',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'register',
            redirectTo: 'register',
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: '', // Redirige a Home si la ruta no existe
      pathMatch: 'full'
    }
];
