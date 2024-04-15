import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FunctionalitiesSectionComponent } from './functionalities-section/functionalities-section.component';
import { PerformanceSectionComponent } from './performance-section/performance-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { CallToActionSectionComponent } from './call-to-action-section/call-to-action-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    FunctionalitiesSectionComponent,
    PerformanceSectionComponent,
    PricingSectionComponent,
    TestimonialSectionComponent,
    CallToActionSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
