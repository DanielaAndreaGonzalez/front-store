import { Injectable } from '@angular/core';
import { Venta } from '../components/model/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor() { }

  getVentas():Venta []{
    return [];
  }

  addVenta(venta:Venta){
    console.log(venta);
  }

  deleteVenta(id:number){
    console.log(id);
  }
}
