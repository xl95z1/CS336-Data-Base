import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { BeersService, Beer, BeerLocation } from '../beers.service';

declare const Highcharts: any;

@Component({
  selector: 'app-beers-details',
  templateUrl: './beers-details.component.html',
  styleUrls: ['./beers-details.component.css']
})
export class BeersDetailsComponent implements OnInit {

  beerName: string;
  beerDetails: Beer;
  sells: BeerLocation[];
  manufacturer: string;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeersService
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      beerService.getBeer(this.beerName).subscribe(
        data => {
          this.beerDetails = data;
        },
        (error:HttpResponse<any>) =>{
          if(error.status === 404) {
            alert('Beer not found')
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console.')
          }
        }
      );

      beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.sells = data;
        }
      );

      beerService.getBeerManufacturers(this.beerName).subscribe(
        data => {
          this.manufacturer = data;
        }
      );

      beerService.getBestSell(this.beerName).subscribe(
        data => {
          console.log(data);

          const bars = [];
          const quantity = [];

          data.forEach( bar => {
            bars.push(bar.bar);
            quantity.push(bar.quantity);
          });
          this.renderChart(bars, quantity);
        }
      );
      
      beerService.getMostCon(this.beerName).subscribe(
        data => {
          console.log(data);

          const drinkers = [];
          const quantity = [];

          data.forEach( drinker => {
            drinkers.push(drinker.drinker);
            quantity.push(drinker.quantity);
          });
          this.renderCChart(drinkers, quantity)
        }
      );

      beerService.getTime(this.beerName).subscribe(
        data =>{
          console.log(data);

          const times = [];
          const quantity = [];

          data.forEach( time => {
            times.push(time.time);
            quantity.push(time.quantity);
          });
          this.renderTChart(times, quantity)  
        }
      )

    });
   }

  ngOnInit() {
  }
  renderChart(bars: string[], quantity: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most beer sold at each bar (TOP 10)'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bars'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers sold'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{

        data: quantity
      }]
    });
  }

  renderCChart(drinkers: string[], quantity: number[]) {
    Highcharts.chart('barcgraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top consumers of the beer (TOP 10)'
      },
      xAxis: {
        categories: drinkers,
        title: {
          text: 'Drinkers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers consumed'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{

        data: quantity
      }]
    });
  }

  renderTChart(times: string[], quantity: number[]) {
    Highcharts.chart('barTgraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Time distribution of beer sale'
      },
      xAxis: {
        categories: times,
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers sold'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{

        data: quantity
      }]
    });
  }

}
