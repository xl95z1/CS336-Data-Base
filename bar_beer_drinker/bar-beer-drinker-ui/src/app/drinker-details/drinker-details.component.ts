import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { DrinkersService, Drinker, DrinkerTrans } from '../drinkers.service';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  trans: DrinkerTrans[];

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      drinkerService.getDrinker(this.drinkerName).subscribe(
        data =>{
          this.drinkerDetails = data;
        },
        (error:HttpResponse<any>) =>{
          if(error.status === 404) {
            alert('Drinker not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console.');
          }
        }
      );
      
      drinkerService.getTrans(this.drinkerName).subscribe(
        data => {
          this.trans = data;
        }
      );

      drinkerService.getMorder(this.drinkerName).subscribe(
        data => {
          console.log(data);


          const items = [];
          const quantity =[];

          data.forEach(item => {
            items.push(item.item);
            quantity.push(item.quantity)
          });
          this.renderChart(items, quantity);


        }
      );

      drinkerService.getTotal(this.drinkerName).subscribe(
        data =>{
          console.log(data);

          const totals = [];
          const date = [];

          data.forEach(total =>{
            totals.push(total.total);
            date.push(total.date);
          });
          this.renderTChart(totals, date);
        }
      );

        

    });
  }

  ngOnInit() {
  }
  renderChart(items: string[], quantity: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Most ordered beers'
      },
      xAxis: {
        categories: items,
        title: {
          text: 'Beers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of beers ordered'
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
  renderTChart(totals: number[], date: string[]) {
    Highcharts.chart('barzgraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Total money spent'
      },
      xAxis: {
        categories: date,
        title: {
          text: 'Dates'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total money spent at each bar'
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

        data: totals
      }]
    });
  }
}
