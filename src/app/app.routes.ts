import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then((m) => m.HomePage) },
  // Note: no route params / query params. The data travels in navigation state.
  { path: 'details', loadComponent: () => import('./details/details.page').then((m) => m.DetailsPage) },
];
