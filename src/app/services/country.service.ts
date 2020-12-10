import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, forkJoin, Observable, Subscription } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';

import { WeatherService } from './weather.service';
import { CountryWeatherInfo } from '../models/country-weather-info';

@Injectable()
export class CountryService {
  private countryApi: string = "https://restcountries.eu/rest/v2/"
  private maxCountries: number = 20;

  public countryWeatherDataSubject: BehaviorSubject<CountryWeatherInfo[]> = new BehaviorSubject([]);

  private currentDataSubscription: Subscription = undefined;

  constructor(private http: HttpClient, private weatherService: WeatherService) {}

  /**
   * Does an http request to the coutnry api
   * @param searchString 
   */
  public getBySearchString(searchString: string): Observable<any[]> {
    return this.http.get(this.countryApi + "name/" + searchString)
      .pipe(
        catchError(error => {
          // no countries found with search
          if(error.status === 404) return of([]);
          throw "Unexpected exception when fetching country data: " + error;
        }),
        map((value: any[]) => value) // cast to any[]
      );
  }

  /**
   * Updates the country weather data subject according to the new query
   * @param searchString 
   */
  public updateWeatherInfos(searchString: string) {
    // cancel previous subscription if new one is made before the end of it to make sure that only the newest search is shown
    if (this.currentDataSubscription !== undefined) {
      this.currentDataSubscription.unsubscribe();
      this.currentDataSubscription = undefined;
    }

    const filterCountriesWithoutCapital = countries => countries.filter(country => country.capital && country.capital !== "");
    const filterExcessCountries = countries => countries.length > this.maxCountries ? countries.slice(0, this.maxCountries) : countries
    const joinWithWeatherInfo = (countries: any[]) => {
      if (countries.length == 0) return of([]);
      return forkJoin(
        countries.map(country => this.weatherService
          .getWeather(country.capital)
          .pipe(
            map(weather => new CountryWeatherInfo(country, weather))
          )
      ));
    }

    this.countryWeatherDataSubject.next(null);

    this.currentDataSubscription = this.getBySearchString(searchString)
      .pipe(
        map(filterCountriesWithoutCapital),
        map(filterExcessCountries),
        flatMap(joinWithWeatherInfo)
      )
      .subscribe(result => {
        this.currentDataSubscription = undefined;
        this.countryWeatherDataSubject.next(result);
      });
  }
}