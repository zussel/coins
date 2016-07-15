import { provideRouter, RouterConfig }  from '@angular/router';
import {OrderEntriesComponent} from "./order.entries.component";
import {DashboardComponent} from "./dashboard.component";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'orders',
        component: OrderEntriesComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
