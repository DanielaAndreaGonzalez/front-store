import { Producto } from "./Producto";
import { Venta } from "./Venta";

export interface ItemVenta {
  id:number, product:Producto, saleId:number, quantity:number
}
