export class CountryWeatherInfo {
  public countryName: string;
  public capital: string;
  public region: string;
  public temperature: number;
  public weatherIcon: string;

  constructor(countryInfo: any, weatherInfo: any) {
    this.countryName = countryInfo.name;
    this.capital = countryInfo.capital;
    this.region = countryInfo.region;
    this.temperature = weatherInfo.current?.temperature;
    this.weatherIcon = weatherInfo.current?.weather_icons?.[0];
  }
}