import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path : 'heroes', component: HerosComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'details/:id', component: HeroDetailsComponent
  },
  {
    path: 'add/hero', component: HeroFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
