import { provideRouter, RouterConfig }  from '@angular/router';
import {OrderEntriesComponent} from "./order.entries.component";
import {DashboardComponent} from "./dashboard.component";
import {ForecastComponent} from "./forecast.component";

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
    },
    {
        path: 'forecast',
        component: ForecastComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
