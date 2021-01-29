import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './select-vehicle.page.html',
  styleUrls: ['./select-vehicle.page.scss'],
})
export class SelectVehiclePage implements OnInit {
  public selectVehicle: string = "Pick-up";
  public vehicleCate: any = [
    {
      Img: "/assets/imgs/Car.svg",
      name: "Mini Van ( Recommended)"
    },
    {
      Img: "/assets/imgs/vehicleIcon1.png",
      name: "Pick-up"
    },
    {
      Img: "/assets/imgs/vehicleIcon3.png",
      name: "Van"
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "Truck"
    }
  ];
  public selectedSubVehicle: string = "Small Van";
  public vehicleSubCate: any = [
    {
      Img: "/assets/imgs/Car.svg",
      name: "Small Van",
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "Medium Van",
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "Extra Big Van",
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "5 ton",
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "7 ton",
    },
    {
      Img: "/assets/imgs/Car.svg",
      name: "10 ton",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
