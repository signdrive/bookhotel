import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule  } from './material.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestauranteComponent } from './food-beverage/restaurante/restaurante.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { LifetstyleComponent } from './lifetstyle/lifetstyle.component';

import { WelnessAndSpaComponent } from './lifetstyle/welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent } from './lifetstyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifetstyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifetstyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing-module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenaveListComponent } from './navigation/sidenave-list/sidenave-list.component';
import { TabsnavComponent } from './navigation/tabsnav/tabsnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestauranteComponent,
    BarsComponent,
    LifetstyleComponent,
    WelnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenaveListComponent,
    TabsnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
