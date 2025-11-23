import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './home-sections/landing/landing.component';
import { ShortInfoComponent } from './home-sections/short-info/short-info.component';
import { TrustedPartnersComponent } from './home-sections/trusted-partners/trusted-partners.component';
import { UserCommentsComponent } from './home-sections/user-comments/user-comments.component';
import { ConclusionComponent } from './home-sections/conclusion/conclusion.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsServiceComponent } from './pages/terms-service/terms-service.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AboutComponent } from './about-sections/about/about.component';
import { TeamsComponent } from './about-sections/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    ShortInfoComponent,
    TrustedPartnersComponent,
    UserCommentsComponent,
    ConclusionComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TermsServiceComponent,
    SupportComponent,
    AboutUsComponent,
    AboutComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
