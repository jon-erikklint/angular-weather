import { Component } from '@angular/core';

import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  searchText: string;

  constructor(private countryService: CountryService) {}

  onSearchUpdate() {
    this.countryService.updateWeatherInfos(this.searchText);
  }
}
