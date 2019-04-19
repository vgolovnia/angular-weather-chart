import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherSearchComponent } from './weather/search/search.component';

const routes: Routes = [
  { path: 'forecast', component: WeatherSearchComponent},
  { path: '**', component: WeatherSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
