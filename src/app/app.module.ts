import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FeaturedListingComponent } from './featured-listing/featured-listing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { TeamComponent } from './about-us/team/team.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { BannerComponent } from './home/banner/banner.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { RecentComponent } from './home/recent/recent.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { PropertyService } from 'src/provider/property.service';
import { environment } from 'src/environments/environment';
import { AddPropertyComponent } from './add-property/add-property.component';
import { SingleListingComponent } from './single-listing/single-listing.component';
import { CarouselComponent } from './single-listing/carousel/carousel.component';
import { NameComponent } from './single-listing/name/name.component';
import { DeatilsComponent } from './single-listing/deatils/deatils.component';
import { SingleListingMapComponent } from './single-listing/single-listing-map/single-listing-map.component';
import { OwnerDetailsComponent } from './single-listing/owner-details/owner-details.component';
import { QueryFormComponent } from './single-listing/query-form/query-form.component';

import { AuthService } from 'src/providers/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutUsComponent,
    NavComponent,
    FooterComponent,
    FeaturedListingComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent,
    FormComponent,
    TestimonialsComponent,
    TeamComponent,
    OurServicesComponent,
    BannerComponent,
    SearchBarComponent,
    RecentComponent,
    FeaturedCardComponent,
    AddPropertyComponent,
    SingleListingComponent,
    CarouselComponent,
    NameComponent,
    DeatilsComponent,
    SingleListingMapComponent,
    OwnerDetailsComponent,
    QueryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [PropertyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
