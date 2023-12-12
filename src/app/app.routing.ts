import { RouterModule, Routes } from "@angular/router";
import { RainbowComponent } from "./components/rainbow/rainbow.component";
import { WordComponent } from "./components/word/word.component";
import { ErrorComponent } from "./components/error/error.component";
import { LoginComponent } from "./modules/authentification/login/login.component";
import { OperationsComponent } from "./components/operations/operations.component";
import {ProductComponent} from "./components/products/product/product.component";
import {HomeComponent} from "./components/home/home.component";



const APP_ROUTING: Routes = [
  {
    path: 'cv',
    loadChildren: () =>
      import('./modules/cv/cv.module').then((m) => m.CvModule),
    data: {preload: true}
  },
  {path: '', component: HomeComponent},
  {path: 'login',
    loadChildren:()=>
      import('./modules/authentification/authentification.module').then((m)=> m.AuthentificationModule)
  },

    {path: 'rainbow', component: RainbowComponent},
    {path: 'products', component: ProductComponent},
    {path: 'word', component: WordComponent},
    {path: 'NotFound', component: ErrorComponent},
    {path: 'operations', component: OperationsComponent},
    {path: '**', component: ErrorComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
