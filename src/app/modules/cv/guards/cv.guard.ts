import {CanActivateFn, CanDeactivateFn} from '@angular/router';
import {Observable} from "rxjs";
export interface CanDesactivate {
  CanDeactivate: () => Observable<boolean> | boolean;
}
export const cvGuard: CanDeactivateFn<CanDesactivate> = (component: CanDesactivate) => {
  return component.CanDeactivate ? component.CanDeactivate() : true;
};
