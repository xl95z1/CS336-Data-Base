import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker {
  name: String;
  address: String;
  city: String;
  phoneNum: String;
}

export interface DrinkerTrans {
  billID: String;
  bar: String;
  item: String;
  quantity: String
  time: String;
  date: String;
}

@Injectable({
  providedIn: 'root'
})

export class DrinkersService {

  constructor(
    public http: HttpClient
    ) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }
  getDrinker(drinker: string){
    return this.http.get<Drinker>('/api/drinker/' + drinker);
  }

  getTrans(drinker: string){
    return this.http.get<DrinkerTrans[]>('/api/trans/' + drinker);
  }
  getMorder(drinker: string){
    return this.http.get<any[]>('/api/mostOrder/' + drinker);
  }
  getTotal(drinker: string){
    return this.http.get<any[]>('/api/total/' + drinker);
  }
}
