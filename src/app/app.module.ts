import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListParkingComponent } from './components/list-parking/list-parking.component';
import { ViewCarComponent } from './components/view-car/view-car.component';
import { AddEditParkingComponent } from './components/add-edit-parking/add-edit-parking.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListParkingComponent,
    ViewCarComponent,
    AddEditParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
