import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarGraphicPage } from './pages/bar-graphic/bar-graphic.component';
import { PieGraphicPage } from './pages/pie-graphic/pie-graphic.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'barGraph', component: BarGraphicPage },
  { path: 'pieGraph', component: PieGraphicPage },
  { path: '', redirectTo: '/barGraph', pathMatch: 'full' },
  { path: '**', component: BarGraphicPage },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
