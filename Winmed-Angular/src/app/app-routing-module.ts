import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingSectionComponent } from './landing-page/components/pricing-section/pricing-section.component';
import { FontionnalitesComponent } from './pages/fontionnalites/fontionnalites.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: '/accueil', pathMatch: 'full' },
      { path: 'accueil', component: LandingPageComponent },
      { path: 'messages', component: FontionnalitesComponent , canActivate: [AuthenticationGuard]},
      { path: 'tarifs', component: PricingSectionComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
