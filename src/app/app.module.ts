import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './product/product.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "**", redirectTo: "welcome", pathMatch: "full"}
];

@NgModule({
  declarations: [
      AppComponent,
      WelcomeComponent,
   ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
