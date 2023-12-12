import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthentificationService} from "../../modules/authentification/services/authentification.service";


export class LoginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token =localStorage.getItem('user')
    if(token){
      const cloneReq=req.clone(
        {
          params: new HttpParams().set('access_token',token)
        }
      )
      return next.handle(cloneReq);
    }else {
      return next.handle(req);
    }


  }

}
export const loginInterceptorProvider ={
  provide:HTTP_INTERCEPTORS,
  useClass:LoginInterceptor,
  multi:true
}
