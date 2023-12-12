import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Cv } from '../../model/cv';
import { EmbaucheService } from '../../services/embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  constructor(private embaucheService: EmbaucheService,
    private router:Router,
    ){
  }

  embaucher(){
    if (this.cv){
      this.embaucheService.Embaucher(this.cv);
     // setTimeout(() => {
       // this.cd.detectChanges();
      //}, 100);
    }

  }

  moreInfo(){
    if (this.cv) {
    const link = ['cv', this.cv.id];
    this.router.navigate(link);
  }}
}
