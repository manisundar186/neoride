import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about-sections/about/about.component';
import { TeamsComponent } from '../about-sections/teams/teams.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuBoxComponent } from '../components/menu-box/menu-box.component';
import { ConclusionComponent } from '../home-sections/conclusion/conclusion.component';
import { LandingComponent } from '../home-sections/landing/landing.component';
import { ShortInfoComponent } from '../home-sections/short-info/short-info.component';
import { TrustedPartnersComponent } from '../home-sections/trusted-partners/trusted-partners.component';
import { UserCommentsComponent } from '../home-sections/user-comments/user-comments.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { BlogsComponent } from '../pages/blogs/blogs.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { HomeComponent } from '../pages/home/home.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { SupportComponent } from '../pages/support/support.component';
import { TermsServiceComponent } from '../pages/terms-service/terms-service.component';

@NgModule({
  declarations: [
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
    MenuBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
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
    MenuBoxComponent,
  ]
})
export class SharedModule { }
