import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar {
  name: String
  address: String
  city: String
  opening: String
  closing: String
  PhoneNum: String
}

export interface BarMenuItem {
  beer: string;
  manf: string;
  price: number;
}

export interface Drinker{
  name: string;
  address: string;
  city: string;
  phoneNum: number;
}


@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars() {
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
   }

  getMenu(bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data');
  }

  getDrinker(){
    return this.http.get<Drinker[]>('/api/drinker');
  }
  find_drinkers_bill(){
    return this.http.get<Drinker[]>('/api/');
  }
  find_top_spenders(bar: string){
    return this.http.get<any[]>('/api/bar/' + bar + "/top-spenders");
  }
  find_popular_beer(bar: string){
    return this.http.get<any[]>('/api/bar/' + bar + '/popular-beers');
  }
  find_popular_beer_distribution(bar: string){
    return this.http.get<any[]>('/api/bar/' + bar + '/popular-beers/time');
  }
  find_top_beer_by_date(bar: string, date: number){
    return this.http.get<any[]>('/api/bar/' + bar + '/popular-beers/' + date);
  }
  find_top_beer(bar: string){
    return this.http.get<any[]>('/api/bar/' + bar + '/top-beer');
  }
}
