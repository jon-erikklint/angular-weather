import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
  private weatherApi: string = "https://api.weatherstack.com/current";
  private accessKey: string = environment.weatherstackAccessKey;

  constructor(private http: HttpClient) { }

  /**
   * Does an http request to weather client
   * @param query a query accroding to weatherstack api, in this context usually a city
   */
  public getWeather(query: string): Observable<any> {
    return this.http.get(this.weatherApi + "?access_key=" + this.accessKey + "&query=" + query);
  }
}