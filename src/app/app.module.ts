import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProdcutComponent } from './component/prodcut/prodcut.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdcutComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    NotFoundComponent,
    ProductEditComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
