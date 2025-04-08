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
          {
            path: 'sections/payment/:id',
            loadComponent: () => import('./landing/sections/payment-section/payment-section.component')
              .then(m => m.PaymentSectionComponent),
            pathMatch: 'full'
          },
          { path: '', redirectTo: 'sections/conciertos', pathMatch: 'full' },
          {
            path: 'sections/login',
            loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
            pathMatch: 'full'
          },
          {
            path: 'sections/register',
            loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: '', 
      pathMatch: 'full'
    }
];
