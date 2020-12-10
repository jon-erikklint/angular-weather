import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CountryService } from './services/country.service';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './components/app.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { TemperaturePipe } from './utils/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTableComponent,
    WeatherSearchComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, MatCardModule, MatTableModule, MatProgressSpinnerModule
  ],
  providers: [CountryService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
