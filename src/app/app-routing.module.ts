import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })
  ]
})

export class AppRoutingModule {
}
