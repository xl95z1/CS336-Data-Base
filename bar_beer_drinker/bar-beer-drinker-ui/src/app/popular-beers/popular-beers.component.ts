import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService } from '../bars.service';

declare const Highcharts: any

@Component({
  selector: 'app-popular-beers',
  templateUrl: './popular-beers.component.html',
  styleUrls: ['./popular-beers.component.css']
})
export class PopularBeersComponent implements OnInit {
  
  barName: string
  
  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');
    })
    this.barService.find_popular_beer(this.barName).subscribe(
      data => {
        console.log(data)

        const totalBeer = [];
        const item = [];

        data.forEach(beer => {
          totalBeer.push(beer.TOTAL);
          item.push(beer.item);
        });

        this.renderChartTotal(totalBeer, item);
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 1).subscribe(
      dataJan => {
        console.log(dataJan)

        const totalJanbeer = [];
        const itemJan = [];

        dataJan.forEach(beer => {
          totalJanbeer.push(beer.TOTAL);
          itemJan.push(beer.item);
        });

        this.renderChartJan(totalJanbeer, itemJan)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 2).subscribe(
      dataFeb => {
        console.log(dataFeb)

        const totalBeerfeb = [];
        const itemFeb = [];

        dataFeb.forEach(beer => {
          totalBeerfeb.push(beer.TOTAL);
          itemFeb.push(beer.item);
        });

        this.renderChartFeb(totalBeerfeb, itemFeb)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 3).subscribe(
      dataMar => {
        console.log(dataMar)

        const totalBeermar = [];
        const itemMar = [];

        dataMar.forEach(beer => {
          totalBeermar.push(beer.TOTAL);
          itemMar.push(beer.item);
        });

        this.renderChartMar(totalBeermar, itemMar)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 4).subscribe(
      dataApr => {
        console.log(dataApr)

        const totalBeerapr = [];
        const itemApr = [];

        dataApr.forEach(beer => {
          totalBeerapr.push(beer.TOTAL);
          itemApr.push(beer.item);
        });

        this.renderChartApr(totalBeerapr, itemApr)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 5).subscribe(
      dataMay => {
        console.log(dataMay)

        const totalBeermau = [];
        const itemMay = [];

        dataMay.forEach(beer => {
          totalBeermau.push(beer.TOTAL);
          itemMay.push(beer.item);
        });

        this.renderChartMay(totalBeermau, itemMay)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 6).subscribe(
      dataJun => {
        console.log(dataJun)

        const totalBeerjun = [];
        const itemJun = [];

        dataJun.forEach(beer => {
          totalBeerjun.push(beer.TOTAL);
          itemJun.push(beer.item);
        });

        this.renderChartJun(totalBeerjun, itemJun)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 7).subscribe(
      dataJly => {
        console.log(dataJly)

        const totalBeerjly = [];
        const itemJly = [];

        dataJly.forEach(beer => {
          totalBeerjly.push(beer.TOTAL);
          itemJly.push(beer.item);
        });

        this.renderChartJly(totalBeerjly, itemJly)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 8).subscribe(
      dataAug => {
        console.log(dataAug)

        const totalBeeraug = [];
        const itemAug = [];

        dataAug.forEach(beer => {
          totalBeeraug.push(beer.TOTAL);
          itemAug.push(beer.item);
        });

        this.renderChartAug(totalBeeraug, itemAug)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 9).subscribe(
      dataSep => {
        console.log(dataSep)

        const totalBeersep = [];
        const itemSep = [];

        dataSep.forEach(beer => {
          totalBeersep.push(beer.TOTAL);
          itemSep.push(beer.item);
        });

        this.renderChartSep(totalBeersep, itemSep)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 10).subscribe(
      dataOct => {
        console.log(dataOct)

        const totalBeeroct = [];
        const itemOct = [];

        dataOct.forEach(beer => {
          totalBeeroct.push(beer.TOTAL);
          itemOct.push(beer.item);
        });

        this.renderChartOct(totalBeeroct, itemOct)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 11).subscribe(
      dataNov => {
        console.log(dataNov)

        const totalBeernov = [];
        const itemNov = [];

        dataNov.forEach(beer => {
          totalBeernov.push(beer.TOTAL);
          itemNov.push(beer.item);
        });

        this.renderChartNov(totalBeernov, itemNov)
      }
    )
    this.barService.find_top_beer_by_date(this.barName, 12).subscribe(
      dataDec => {
        console.log(dataDec)

        const totalBeerdec = [];
        const itemDec = [];

        dataDec.forEach(beer => {
          totalBeerdec.push(beer.TOTAL);
          itemDec.push(beer.item);
        });

        this.renderChartDec(totalBeerdec, itemDec)
      }
    )
    this.barService.find_popular_beer_distribution(this.barName).subscribe(
      dataDistribution => {
        console.log(dataDistribution)

        const distTotal = [];
        const distTime = [];

        dataDistribution.forEach(beer => {
          distTotal.push(beer.TOTAL);
          distTime.push(beer.time);
        });

        this.renderChartDist(distTotal, distTime)
      }
    )
  }

  ngOnInit() {
  }

  renderChartTotal(totalBeer: string[], item:number[]) {
      Highcharts.chart('bargraph', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Best Selling Beers'
          },
          xAxis: {
              categories: item,
              title: {
                  text: 'beer'
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total'
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
              data: totalBeer
          }]
      })
  }

  renderChartJan(totalJanbeer: string[], itemJan:number[]) {
    Highcharts.chart('jangraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Janurary'
        },
        xAxis: {
            categories: itemJan,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalJanbeer
        }]
    })
  }
  renderChartFeb(totalBeerfeb: string[], itemFeb:number[]) {
    Highcharts.chart('febgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Feburary'
        },
        xAxis: {
            categories: itemFeb,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeerfeb
        }]
    })
  }
  renderChartMar(totalBeermar: string[], itemMar:number[]) {
    Highcharts.chart('margraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'March'
        },
        xAxis: {
            categories: itemMar,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeermar
        }]
    })
  }
  renderChartApr(totalBeerapr: string[], itemApr:number[]) {
    Highcharts.chart('aprgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'April'
        },
        xAxis: {
            categories: itemApr,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeerapr
        }]
    })
  }
  renderChartMay(totalBeermay: string[], itemMay:number[]) {
    Highcharts.chart('maygraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'May'
        },
        xAxis: {
            categories: itemMay,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeermay
        }]
    })
  }
  renderChartJun(totalBeerjun: string[], itemJun:number[]) {
    Highcharts.chart('jungraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'June'
        },
        xAxis: {
            categories: itemJun,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeerjun
        }]
    })
  }
  renderChartJly(totalBeerjly: string[], itemJly:number[]) {
    Highcharts.chart('jlygraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'July'
        },
        xAxis: {
            categories: itemJly,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeerjly
        }]
    })
  }
  renderChartAug(totalBeeraug: string[], itemAug:number[]) {
    Highcharts.chart('auggraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'August'
        },
        xAxis: {
            categories: itemAug,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeeraug
        }]
    })
  }
  renderChartSep(totalBeersep: string[], itemSep:number[]) {
    Highcharts.chart('sepgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'September'
        },
        xAxis: {
            categories: itemSep,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeersep
        }]
    })
  }
  renderChartOct(totalBeeroct: string[], itemOct:number[]) {
    Highcharts.chart('octgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'October'
        },
        xAxis: {
            categories: itemOct,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeeroct
        }]
    })
  }
  renderChartNov(totalBeernov: string[], itemNov:number[]) {
    Highcharts.chart('novgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'November'
        },
        xAxis: {
            categories: itemNov,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeernov
        }]
    })
  }
  renderChartDec(totalBeerdec: string[], itemDec:number[]) {
    Highcharts.chart('decgraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'December'
        },
        xAxis: {
            categories: itemDec,
            title: {
                text: 'Beer'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: totalBeerdec
        }]
    })
  }
  renderChartDist(distTotal: string[], distTime:number[]) {
    Highcharts.chart('sales', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Distribution'
        },
        xAxis: {
            categories: distTime,
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
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
            data: distTotal
        }]
    })
  }
}
