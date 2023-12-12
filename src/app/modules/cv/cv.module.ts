import { NgModule } from '@angular/core';
import {AddComponent} from "./components/add/add.component";
import {CvComponent} from "./components/cv/cv.component";
import {DetailComponent} from "./components/detail/detail.component";
import {DetailCvComponent} from "./components/detail-cv/detail-cv.component";
import {EmbaucheComponent} from "./components/embauche/embauche.component";
import {ItemComponent} from "./components/item/item.component";
import {ListComponent} from "./components/list/list.component";
import {MasterComponent} from "./components/master/master.component";
import {SearchComponent} from "./components/search/search.component";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CvRoutingModule} from "./cv.routing";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AddComponent,
    CvComponent,
    DetailComponent,
    DetailCvComponent,
    EmbaucheComponent,
    ItemComponent,
    ListComponent,
    MasterComponent,
    SearchComponent,
    DefaultImagePipe
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CvRoutingModule,
    HttpClientModule,
  ]
})
export class CvModule { }
