import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

const APP_ROUTING:Routes=[
  {
    path: '',
    component: LoginComponent
  },

]
@NgModule({
  imports: [RouterModule.forChild(APP_ROUTING)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
