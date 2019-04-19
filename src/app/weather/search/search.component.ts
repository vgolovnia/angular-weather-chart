import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
    selector: 'app-weather-search',
    templateUrl: './search.component.html',
})
export class WeatherSearchComponent implements OnInit {

    errorMessage: string;
    weatherForecastData: any;
    disabledForecastButton: boolean;
    cityName: string;

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
    }
    onSubmit(cityName: string) {
        console.log(cityName);
        this.weatherService.getWeatherForecast(cityName)
            .subscribe(data => {
                this.weatherForecastData = data;
            }, error => this.errorMessage = error as any);
    }

    onSearchLocation(cityName: string) {
        this.disabledForecastButton = false;
        console.log(cityName);
    }

    onSubmitDatabinding() {
        this.weatherService.getWeatherForecast(this.cityName)
            .subscribe(data => {
                this.weatherForecastData = data;
            }, error => this.errorMessage = error as any);
        this.onResetControls();
    }

    onSearchLocationWithEvent(event: Event) {
        this.cityName = (event.target as HTMLInputElement).value;
        this.disabledForecastButton = false;
    }

    onResetControls() {
        this.cityName = '';
        this.disabledForecastButton = true;
    }

    private extractData(res: any) {
        const body = res.json();
        return body.list || {};
      }
}
