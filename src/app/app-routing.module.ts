import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistogramPage } from './pages/histogram/histogram.component';
import { TopSalesPage } from './pages/top-sales/top-sales.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'histogram', component: HistogramPage, canActivate:[AuthGuard]  },
  { path: 'topSales', component: TopSalesPage, canActivate:[AuthGuard]   },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
