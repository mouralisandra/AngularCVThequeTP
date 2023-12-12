import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  tableau = [
    'blue',
    'red',
    'pink',
    'yellow',
    'green',
    'lightblue',
    'lightyellow',
    'lightgreen',
    'gold',
    'gray',
    'lightgray',
    'purple'
  ];
  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color: any;
  
  constructor() { }
@HostListener('keypress') changeColor(){
  const index = Math.floor(Math.random()*(this.tableau.length-1));
  this.bc= this.tableau[index];
  this.color= this.tableau[index];
}
}
