import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
 color = 'black';
 fontFamily = 'sans-serif';
 size = '20px';

  onChangeSize(size:any){
   this.size= size + 'px'
  }
  
}
