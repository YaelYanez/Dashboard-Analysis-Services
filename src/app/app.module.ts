import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BarGraphicPage } from './pages/bar-graphic/bar-graphic.component';
import { PieGraphicPage } from './pages/pie-graphic/pie-graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphicPage,
    PieGraphicPage,
    NavbarComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
