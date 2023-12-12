import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './components/word/word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RainbowDirective } from './directive/rainbow.directive';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './modules/authentification/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperationsComponent } from './components/operations/operations.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import {loginInterceptorProvider} from "./components/interceptors/loginInterceptor";
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    RainbowDirective,
    RainbowComponent,
    HeaderComponent,
    ErrorComponent,
    OperationsComponent,
    ProductComponent,
    ProductItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule,
    ROUTING,
  	ToastrModule.forRoot(),
  ],
  providers: [loginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
