import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './product/product-detail/product-detail.guard';

const routes: Routes = [
  {path: "products", component: ProductListComponent},
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  },
  {path: "welcome", component: WelcomeComponent},
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "**", redirectTo: "welcome", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
