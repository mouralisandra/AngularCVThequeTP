import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { loginDto } from 'src/app/modules/authentification/dtos/login.dto';
import { AuthentificationService } from 'src/app/modules/authentification/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}
  /*login(credentials: any){
   this.authentificationService.login(credentials).
   subscribe(
    (response) => {
      console.log(response)
      localStorage.setItem
      ('user', JSON.stringify(response));
      this.router.navigate(['cv']);
    }
   )

  }*/
  login(credentials: any){
    this.authentificationService.login(
      new loginDto(credentials.email, credentials.password)
    ).subscribe(
      ()=> this.router.navigate(['cv'])
    )
  }

 /* logout() {
    this.authentificationService.logout().subscribe(
      () => {
        this.router.navigate(['/login']); // Assurez-vous que '/login' est le bon chemin
      },
      error => {
        console.error('Erreur lors de la déconnexion :', error);
      }
    );
  }*/

  /*emailErrorMessage: string = '';


  validateEmail(email: string) {

    if (email.trim() === '') {
      this.emailErrorMessage = 'Veuillez saisir une adresse email.';
    } else {
      this.emailErrorMessage = '';
    }
  }*/
}
