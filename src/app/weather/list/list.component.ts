import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-weather-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [WeatherService]
})

export class WeatherListComponent implements OnInit, OnChanges {
  @Input() public WeatherForecastList: any;
  errorMessage: string;
  selectedItem: string;
  chart: any;

  highcharts = Highcharts;
  chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: openweathermap.org'
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
            text: 'Temperature °C'
        }
      },
      tooltip: {
        valueSuffix: ' °C'
      },
      series: [
        {
            name: '',
            data: []
        }
      ]
  };


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.WeatherForecastList) {
      // tslint:disable-next-line:only-arrow-functions
      this.chartOptions.xAxis.categories = this.WeatherForecastList.list.map(function(x) {
        return x.dt_txt;
      });
      this.chartOptions.series = [
        {
            name: this.WeatherForecastList.city.name,
            // tslint:disable-next-line:only-arrow-functions
            data: this.WeatherForecastList.list.map(function(x) {
              return x.main.temp_max;
            })
        }
      ];

      this.chart = Highcharts.chart('test-chart', this.chartOptions as Options);
    }
  }

  ngOnInit(): any {
  }
}
