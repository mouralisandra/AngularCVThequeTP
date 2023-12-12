import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CvComponent} from "./components/cv/cv.component";
import {cvResolver} from "./resolvers/cv.resolver";
import {MasterComponent} from "./components/master/master.component";
import {DetailComponent} from "./components/detail/detail.component";
import {detailResolver} from "./resolvers/detail.resolver";
import {AddComponent} from "./components/add/add.component";
import {cvGuard} from "./guards/cv.guard";

const APP_ROUTING: Routes = [
  {path: '', component: CvComponent,resolve:{cvs:cvResolver} },
  {path:'list',component:MasterComponent,resolve:{cvs:cvResolver},children: [
      {
        path: ':id',
        component: DetailComponent,
        resolve: { cv: detailResolver },
      },
    ],},
  {path:'add',component:AddComponent,canDeactivate: [cvGuard],},
  {path:'update/:id',component:AddComponent,canDeactivate: [cvGuard],},
  {path: ':id', component: DetailComponent,resolve:{cv: detailResolver}},
];
@NgModule({
  imports: [RouterModule.forChild(APP_ROUTING)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
