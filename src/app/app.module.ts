import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { WeatherListComponent } from './weather/list/list.component';
import { WeatherSearchComponent } from './weather/search/search.component';
import { WeatherService } from './weather/weather.service';
import { TemperatureConverterPipe } from './shared/pipes/temperature-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HighchartsChartModule
  ],
  providers: [WeatherService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
