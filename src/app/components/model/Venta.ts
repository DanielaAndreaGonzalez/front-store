import { ItemVenta } from "./ItemVenta";

export interface Venta {
  id: number;
  quantity: number;
  saleDate: Date;
  total: number;
  saleItems: ItemVenta[];
}
