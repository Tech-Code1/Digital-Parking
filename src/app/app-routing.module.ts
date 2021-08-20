import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditParkingComponent } from './components/add-edit-parking/add-edit-parking.component';
import { ListParkingComponent } from './components/list-parking/list-parking.component';
import { ViewCarComponent } from './components/view-car/view-car.component';

const routes: Routes = [
  { path: "", component: ListParkingComponent },
  { path: "registrar-carro", component: AddEditParkingComponent},
  { path: "editar/:id", component: AddEditParkingComponent},
  { path: "ver-carro/:id", component: ViewCarComponent},
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
