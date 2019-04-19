import { Injectable, Inject } from '@angular/core';
import { WEATHER_LIST } from './weather.data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getWeatherItems() {
    return WEATHER_LIST;
  }

  getWeatheritemsbyCity(cityName: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units +
      '&cnt=' + environment.cnt
    );
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units +
      '&cnt=' + environment.cnt
    );
  }

  private handleError(error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
