import {Component, OnInit} from '@angular/core';
import { Cv } from '../../model/cv';
import { EmbaucheService } from '../../services/embauche.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit{
  cvs: Cv[] =[] ;
  constructor(private embaucheService: EmbaucheService){}



  ngOnInit(): void {
    this.embaucheService.embauches$.subscribe(data => {
      // Process the data as needed
      this.cvs = data;
      console.log('Embauche Data:', this.cvs);
    });
  }

}
