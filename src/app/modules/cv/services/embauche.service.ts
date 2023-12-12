import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
 private cvs: Cv[] = [];
  getEmbauches$ = new BehaviorSubject<Cv[]>([]);
  embauches$ : Observable<Cv[]>;
  constructor(
    private toastr:ToastrService
  ) {
    this.embauches$ = this.getEmbauches$.asObservable()
  }

   Embaucher(cv: Cv): void {
     var embauches = this.getEmbauches$.value
     if (embauches.findIndex((c)=> c.id == cv.id) == -1){
       embauches = [...embauches, cv]
       this.getEmbauches$.next(embauches);

       this.toastr.success(`Le candidat ${cv.firstname} ${cv.name} a été ajouté`)
     } else {
       this.toastr.warning(`Le candidat ${cv.firstname} ${cv.name} est déja embauché`)
     }
  }
   getEmbauchees(): Observable<Cv[]>{
    return this.getEmbauches$;
   }





}
