import { Component, OnInit } from '@angular/core';
import { ICars } from 'src/app/interfaces/Cars';

@Component({
  selector: 'app-list-parking',
  templateUrl: './list-parking.component.html',
  styleUrls: ['./list-parking.component.css']
})
export class ListParkingComponent implements OnInit {

  listCars: ICars[] = [
    {
    id: 123,
    placa: "AEF-345",
    hora_entrada: new Date("Fri Dec 08 2019 07:44:57"),
    hora_salida: new Date("Fri Dec 08 2019 07:44:57"),
    estado: false,
    total: 24000
  },
  {
    id: 321,
    placa: "KHY-645",
    hora_entrada: new Date("Fri Dec 08 2019 09:44:45"),
    hora_salida: new Date("Fri Dec 08 2021 09:35:57"),
    estado: false,
    total: 24000
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
