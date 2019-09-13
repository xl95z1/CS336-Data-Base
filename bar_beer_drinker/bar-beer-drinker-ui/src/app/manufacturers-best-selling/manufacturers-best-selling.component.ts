import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar, BarMenuItem } from '../bars.service';
import { BarDetailsComponent } from '../bar-details/bar-details.component';

declare const Highcharts:any

@Component({
  selector: 'app-manufacturers-best-selling',
  templateUrl: './manufacturers-best-selling.component.html',
  styleUrls: ['./manufacturers-best-selling.component.css']
})
export class ManufacturersBestSellingComponent implements OnInit {

  barName: string
  menu: BarMenuItem[];

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.find_top_beer(this.barName).subscribe(
        data => {
          console.log(data)
          this.menu = data;
        }
      );
    })

  }

  ngOnInit() {
  }

}
