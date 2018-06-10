import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from './gradient/gradient.component';

const routes: Routes = [
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'box-shadow',
    component: BoxshadowComponent
  },
  { path: '',
    redirectTo: 'gradient',
    pathMatch: 'full'
  },
  { path: '**', component: GradientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
