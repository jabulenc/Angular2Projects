import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StocksComponent} from './stocks.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const approutes: Routes = [
    {

    path:'stocks',
    component: StocksComponent
},
{
    path: '',
    component: DashboardComponent
}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(approutes);