import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarGraphicPage } from './pages/bar-graphic/bar-graphic.component';
import { PieGraphicPage } from './pages/pie-graphic/pie-graphic.component';

const routes: Routes = [
  { path: '', component: BarGraphicPage },
  { path: 'pieGraph', component: PieGraphicPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
