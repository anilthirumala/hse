import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegiterCompanyComponent } from './regiter-company/regiter-company.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { FormsModule } from '@angular/forms';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { EditStockComponent } from './edit-stock/edit-stock.component';
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegiterCompanyComponent,
    LoginCompanyComponent,
    AddStockComponent,
    ShowStockComponent,
    EditStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
