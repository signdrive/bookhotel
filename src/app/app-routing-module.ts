import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifetstyleComponent } from './lifetstyle/lifetstyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: 'accomodation', component: AccomodationComponent },
    { path: 'celebration', component: CelebrationsComponent},
    { path: 'lifestyle', component: LifetstyleComponent},
    { path: 'offers', component: OffersComponent },
    { path: 'weddings', component: WeddingsComponent },
    { path: 'food-beverage', component: FoodBeverageComponent },
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent }
];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes )],
    exports: [RouterModule]
 })
 export class AppRoutingModule { }
