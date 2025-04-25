import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent, // Import AppComponent here
    ProductComponent // Import ProductComponent here
  ],
  bootstrap: [AppComponent] // Bootstrap the main AppComponent
})
export class AppModule { }