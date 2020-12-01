import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturedListingComponent } from './featured-listing/featured-listing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { SingleListingComponent } from './single-listing/single-listing.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isLeft' } },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { animation: 'isLeft' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'featured-listing',
    component: FeaturedListingComponent,
    data: { animation: 'isLeft' }
  },
  { path: 'login', component: LoginComponent, data: { animation: 'isRight' } },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'single-listing',
    component: SingleListingComponent,
    data: { animation: 'isLeft' }
  },
  {
    path: 'add',
    children: [{ path: 'property', component: AddPropertyComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
