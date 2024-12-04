import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageInComponent } from './landing-page-in/landing-page-in.component';
import { LandingPageEuComponent } from './landing-page-eu/landing-page-eu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'in', component: LandingPageInComponent },
  { path: 'eu', component: LandingPageEuComponent },
  { path: '**', redirectTo: 'in' } ,
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }