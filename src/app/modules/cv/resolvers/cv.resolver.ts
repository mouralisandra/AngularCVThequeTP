import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {CvService} from "../services/cv.service";

// @ts-ignore
export const cvResolver: ResolveFn<Cv[] | null> = (route, state) => {
  const cvService = inject(CvService);
  return cvService.getCvs()

};
