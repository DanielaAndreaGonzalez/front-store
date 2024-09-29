import { Injectable } from '@angular/core';
import { Producto } from '../components/model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  constructor() { }

  getProductos() {
    return [
      { id: 1, nombre: 'Producto 1', precio: 10.99, stock: 100 },
      { id: 2, nombre: 'Producto 2', precio: 19.99, stock: 50 },
      { id: 3, nombre: 'Producto 3', precio: 14.99, stock: 75 }
    ];
    //return this.http.get<Producto[]>(this.url);
  }

  updateProducto(producto: Producto) {
    const list = [
      { id: 1, nombre: 'Producto 1', precio: 10.99, stock: 100 },
      { id: 2, nombre: 'Producto 2', precio: 19.99, stock: 50 },
      { id: 3, nombre: 'Producto 3 M', precio: 14.99, stock: 75 }
    ];
    list.push(producto);
    console.log(list);
    //return this.http.put(this.url, producto);
  }

  addProducto(producto: Producto) {
    const list = [
      { id: 1, nombre: 'Producto 13', precio: 10.99, stock: 100 },
      { id: 2, nombre: 'Producto 2', precio: 19.99, stock: 50 },
      { id: 3, nombre: 'Producto 3', precio: 14.99, stock: 75 }
    ];
    list.push(producto);
    console.log(list);
    //return this.http.post(this.url, producto);
  }
}
