import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './modules/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { SellersComponent } from './modules/sellers/sellers.component';
import { ShoesComponent } from './modules/shoes/shoes.component';
import { StoresComponent } from './modules/stores/stores.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { UpdateshoesComponent } from './modules/updateshoes/updateshoes.component';
import { CreateshoesComponent } from './modules/createshoes/createshoes.component';
import { ReadshoesComponent } from './modules/readshoes/readshoes.component'; 
import { AuthenticationGuard } from './guard/authentication.guard'; 
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellersComponent,
    ShoesComponent,
    StoresComponent,
    SuppliersComponent,
    UpdateshoesComponent,
    CreateshoesComponent,
    ReadshoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],
  providers: [AuthenticationGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
