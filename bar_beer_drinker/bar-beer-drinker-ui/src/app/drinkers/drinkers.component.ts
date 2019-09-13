import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinker } from '../drinkers.service';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  drinkers: Drinker[];

  constructor(
    private drinkerService: DrinkersService 
  ) { 
    this.getDrinkers();
  }

  ngOnInit() {
  }

  getDrinkers() {
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve a list of drinkers')
      }
    )
  }

}
