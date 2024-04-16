import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingSectionComponent } from './landing-page/components/pricing-section/pricing-section.component';
import { FontionnalitesComponent } from './fontionnalites/fontionnalites.component';
import { HeroSectionComponent } from './landing-page/components/hero-section/hero-section.component';
import { NavbarComponent } from './landing-page/components/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: '/accueil', pathMatch: 'full' },
      { path: 'accueil', component: LandingPageComponent },
      { path: 'fonctionnalités', component: FontionnalitesComponent },
      { path: 'tarifs', component: PricingSectionComponent },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
