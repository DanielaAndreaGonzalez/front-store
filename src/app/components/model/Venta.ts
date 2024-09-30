export interface Venta {
  id: number;
  productoId: number;
  productoNombre?: string;
  cantidad: number;
  fecha: Date;
  total: number;
}
