import { Component, OnInit } from '@angular/core';
import { BeersService, Beer } from '../beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: Beer[];

  constructor(
    private beerService: BeersService
  ) {
    this.getBeers();
  }

  ngOnInit() {
  }
  getBeers() {
    this.beerService.getBeers().subscribe(
      data => {
        this.beers = data;
      },
      error => {
        alert('Could not retrieve a list of beers')
      }
    )
  }
}
