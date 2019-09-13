import { Component, OnInit } from '@angular/core';
import { BarsService } from '../bars.service';
import { ActivatedRoute } from '@angular/router';

declare const Highcharts: any

@Component({
  selector: 'app-top-drinkers',
  templateUrl: './top-drinkers.component.html',
  styleUrls: ['./top-drinkers.component.css']
})
export class TopDrinkersComponent implements OnInit {

  barName: string

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
    ) {
      route.paramMap.subscribe((paramMap) => {
        this.barName = paramMap.get('bar');
      })
    this.barService.find_top_spenders(this.barName).subscribe(
      data => {
        console.log(data)

        const names = [];
        const spent = [];

        data.forEach(drinker => {
          names.push(drinker.drinker);
          spent.push(drinker.price);
        });

        this.renderChart(names, spent);
      }
    )
   }

  ngOnInit() {
  }

  renderChart(names: string[], spent:number[]) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Spenders'
            },
            xAxis: {
                categories: names,
                title: {
                    text: 'Name'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enables: true
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
                data: spent
            }]
        })
    }
}
