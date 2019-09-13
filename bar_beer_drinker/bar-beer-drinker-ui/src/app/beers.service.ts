import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Beer {
  beer: string;
  manf: string;
}

export interface BeerLocation {
  bar: string;
  price: number;
  customers: number;
}


@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    private http: HttpClient
  ) { }

  getBeers() {
    return this.http.get<Beer[]>('/api/beer');
  }
  getBeer(beer: string){
    return this.http.get<Beer>('/api/beer/' + beer);
  }
  getBarsSelling(beer: string){
    return this.http.get<BeerLocation[]>('/api/bars_selling/' + beer);
  }
  getBeerManufacturers(beer?: string): any {
    if (beer) {
      return this.http.get<string>('/api/beer-manufacturer/' + beer);
    }
    return this.http.get<string[]>('/api/beer-manufacturer');
  }
  getBestSell(beer: string){
    return this.http.get<any[]>('/api/bestsells/' + beer);
  }
  getMostCon(beer: string){
    return this.http.get<any[]>('/api/consumer/' + beer);
  }
  getTime(beer: string){
    return this.http.get<any[]>('/api/time/' + beer);
  }

}

