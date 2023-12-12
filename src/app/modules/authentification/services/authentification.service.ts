import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../models/user';
import { loginDto } from '../dtos/login.dto';
import {Response} from "../dtos/response.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn$ : Observable<boolean>
  user = new BehaviorSubject<User | null>(null);
  isLoggedOut$ :Observable<boolean>

  constructor(
    private http: HttpClient
  ) {
    const user = localStorage.getItem('user');
    this.isLoggedIn$ = this.user.pipe(
      map((res)=>{
        if (res == null)
          return false
        return true
      }))
      this.isLoggedOut$ = this.user.pipe(
        map((res)=>{
          if (res == null)
            return true
          return false
        }))

        if (user !== null) {
          this.loginUser(user);
        } else {
          this.logout();
        }
   }


  loginUser(user: any) {
    this.user.next(user);
  }

  login(dto: loginDto) {
    return this.http
      .post<Response>('https://apilb.tridevs.net/api/Users/login', dto)
      .pipe(
        tap((res) =>{
          const token = {
            token:res.id,
            email:dto.email
            //id: userId,
          };
          localStorage.setItem('user', res.id);
          // @ts-ignore
          this.user.next(token);
          //this.loginUser(user);
        }),
      )
  }

  logout() {
    localStorage.removeItem("user");
    this.user.next(null);
  }
}


  /*

  link='https://apilb.tridevs.net/api/Users/login'
  login(credentials: any){
    return this.http.post(this.link, credentials).pipe(
      tap()
    )
  }


  isUserLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    console.log('User data:', user); // Vérifier si les données sont récupérées du stockage local
    return user !== null; // Retourne vrai si des informations d'authentification sont présentes, sinon faux
  }
  logout(): Observable<any> {

    // Vider les informations stockées localement
    localStorage.removeItem('user');
    return new Observable(observer => {
      observer.next(true);
      observer.complete();
    });
  }*/

