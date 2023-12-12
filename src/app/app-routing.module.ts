import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategy } from './strategy/preloading-strategy.service';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
