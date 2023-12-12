import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/app/modules/authentification/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$ : Observable<boolean>
  isLoggedOut$ : Observable<boolean>

  constructor(private authentificationService: AuthentificationService) {
    this.isLoggedIn$ = this.authentificationService.isLoggedIn$;
    this.isLoggedOut$ = this.authentificationService.isLoggedOut$;
  }

  logout(){
    this.authentificationService.logout();
  }

  /*isLoggedIn(): boolean {
    // Vérifier l'état de connexion en fonction des informations stockées localement
    return this.authentificationService.isUserLoggedIn(); // Méthode à implémenter dans votre service d'authentification
  }

  logout(): void {
    this.authentificationService.logout(); // Appel à la méthode de déconnexion
  }*/
}
