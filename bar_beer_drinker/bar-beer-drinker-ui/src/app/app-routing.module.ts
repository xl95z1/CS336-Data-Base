import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { TopDrinkersComponent } from './top-drinkers/top-drinkers.component';
import { PopularBeersComponent } from './popular-beers/popular-beers.component';
import { ManufacturersBestSellingComponent } from './manufacturers-best-selling/manufacturers-best-selling.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';

//Xin's Components
import { DrinkersComponent } from './drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';
import { ModificationComponent } from './modification/modification.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'bars/:bar/top-drinkers',
    pathMatch: 'full',
    component: TopDrinkersComponent
  },
  {
    path: 'bars/:bar/popular-beers',
    pathMatch: 'full',
    component: PopularBeersComponent
  },
  {
    path: 'bars/:bar/popular-beers/:date',
    pathMatch: 'full',
    component: PopularBeersComponent
  },
  {
    path: 'bars/:bar/manufacturers-best-selling',
    pathMatch: 'full',
    component: ManufacturersBestSellingComponent
  },
  {
    path: 'bars/:bar/new-transaction',
    pathMatch: 'full',
    component: NewTransactionComponent
  },
  //Xin's part
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeersDetailsComponent
  },
  {
	path: 'drinkers',
    pathMatch: 'full',
    component: DrinkersComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  },
  {
    path: 'modification',
    pathMatch: 'full',
    component: ModificationComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
