import { ResolveFn } from '@angular/router';
import {Cv} from "../model/cv";
import {inject} from "@angular/core";
import {CvService} from "../services/cv.service";
import {catchError, map, of} from "rxjs";

// @ts-ignore
export const detailResolver: ResolveFn<Cv|null> = (route, state) => {
  const cvService = inject(CvService);
  const id = route.params['id'];

  return cvService.getCvById(id).pipe(
    map((cv)=> cv),
    catchError(() => {
      return of(null);
    })
  )
};
