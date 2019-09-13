import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { TopDrinkersComponent } from './top-drinkers/top-drinkers.component';
import { PopularBeersComponent } from './popular-beers/popular-beers.component';
import { ManufacturersBestSellingComponent } from './manufacturers-best-selling/manufacturers-best-selling.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';

//Xin's Part
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { ModificationComponent } from './modification/modification.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeersComponent,
    InsightComponent,
    TopDrinkersComponent,
    PopularBeersComponent,
    ManufacturersBestSellingComponent,
    NewTransactionComponent,
    ModificationComponent,
	//Xin's Part
	  DrinkerDetailsComponent,
    DrinkersComponent,
    BeersComponent,
    BeersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
