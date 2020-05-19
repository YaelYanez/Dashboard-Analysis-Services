import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistogramPage } from './pages/histogram/histogram.component';
import { TopSalesPage } from './pages/top-sales/top-sales.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'histogram', component: HistogramPage },
  { path: 'topSales', component: TopSalesPage },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
