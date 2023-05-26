import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
      AppComponent,
      ProductListComponent,
      StarComponent,
      ConvertToSpacesPipe
   ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
