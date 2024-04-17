import { NotificationModule } from '@progress/kendo-angular-notification';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroSectionComponent } from './landing-page/components/hero-section/hero-section.component';
import { FunctionalitiesSectionComponent } from './landing-page/components/functionalities-section/functionalities-section.component';
import { PerformanceSectionComponent } from './landing-page/components/performance-section/performance-section.component';
import { PricingSectionComponent } from './landing-page/components/pricing-section/pricing-section.component';
import { TestimonialSectionComponent } from './landing-page/components/testimonial-section/testimonial-section.component';
import { CallToActionSectionComponent } from './landing-page/components/call-to-action-section/call-to-action-section.component';
import { FooterComponent } from './landing-page/components/footer/footer.component';
import { PricingCardComponent } from './shared/components/pricing-card/pricing-card.component';
import { TextBoxComponent } from './shared/components/text-box/text-box.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsFormComponent } from './shared/components/contact-us-form/contact-us-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { FontionnalitesComponent } from './pages/fontionnalites/fontionnalites.component';
import { GridModule } from '@progress/kendo-angular-grid';




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
    FooterComponent,
    PricingCardComponent,
    TextBoxComponent,
    LandingPageComponent,
    ContactUsFormComponent,
    FontionnalitesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NotificationModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
