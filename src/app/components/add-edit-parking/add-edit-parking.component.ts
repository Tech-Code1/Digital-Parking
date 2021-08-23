import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICars } from 'src/app/interfaces/Cars';

@Component({
  selector: 'app-add-edit-parking',
  templateUrl: './add-edit-parking.component.html',
  styleUrls: ['./add-edit-parking.component.css']
})
export class AddEditParkingComponent implements OnInit {

  addCar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addCar = this.fb.group({
      placa: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  add() {
    console.log(this.addCar);
    const car: ICars = {
      id: 0,
      placa: this.addCar.get("placa")?.value,
      estado: true,
      hora_entrada: new Date,
      hora_salida: new Date,
      total: 0
    };

    console.log(car);

  }

}
