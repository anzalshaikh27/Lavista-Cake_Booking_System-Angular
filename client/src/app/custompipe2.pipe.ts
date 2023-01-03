import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe2',
  pure : false
})
export class Custompipe2Pipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    var fav:string="";

    if(value=="Rainbow Cake"){
      fav = ".......(HOT SELLING!!!!!)"
    }
   
    if(value=="Rasmalai Cake"){
      fav = ".......(HOT SELLING!!!!!)"
    }
  return value+fav;

    
  }

}