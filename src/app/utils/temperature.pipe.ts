import { Pipe, PipeTransform } from '@angular/core';

/**
 * Used to show temperatures in celcius
 * Kinda useless atm
 */
@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(temperature: number): string {
    return temperature + " C";
  }
}
