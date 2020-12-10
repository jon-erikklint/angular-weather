import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryWeatherInfo } from 'src/app/models/country-weather-info';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent {
  displayedColumns: string[] = ["country", "capital", "region", "weather"];
  countryWeatherInfos$: Observable<CountryWeatherInfo[]>;

  constructor(countryService: CountryService) {
    this.countryWeatherInfos$ = countryService.countryWeatherDataSubject;
  }
}
