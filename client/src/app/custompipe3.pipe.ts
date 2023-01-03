import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe3'
})
export class Custompipe3Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    value.titlecase;
    return value;
  }

}