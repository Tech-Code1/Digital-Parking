import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListParkingComponent } from './components/list-parking/list-parking.component';
import { ViewParkingComponent } from './components/view-parking/view-parking.component';
import { AddEditParkingComponent } from './components/add-edit-parking/add-edit-parking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListParkingComponent,
    ViewParkingComponent,
    AddEditParkingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
