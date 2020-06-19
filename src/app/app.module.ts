import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { HistogramPage } from './pages/histogram/histogram.component';
import { TopSalesPage } from './pages/top-sales/top-sales.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './components/selects/multi-select/multi-select.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HistogramPage,
    TopSalesPage,
    NavbarComponent,
    BarChartComponent,
    PieChartComponent,
    NotFoundComponent,
    MultiSelectComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
