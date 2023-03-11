import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductCreateComponent } from './component/product-create/product-create.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdcutComponent } from './component/prodcut/prodcut.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product', component: ProdcutComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'prodcut/:id/edit', component: ProductEditComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
