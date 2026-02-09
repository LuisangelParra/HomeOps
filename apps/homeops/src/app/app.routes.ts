import { Routes } from '@angular/router';
import { Shell } from "./core/layout/shell/shell";

export const routes: Routes = [
    {
        path: "",
        component: Shell,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'inventory', loadComponent: () => import('./pages/inventory/inventory').then(m => m.Inventory) },
            { path: 'tasks', loadComponent: () => import('./pages/tasks/tasks').then(m => m.Tasks) },
            { path: 'settings', loadComponent: () => import('./pages/settings/settings').then(m => m.Settings) },
        ]
    },
];
