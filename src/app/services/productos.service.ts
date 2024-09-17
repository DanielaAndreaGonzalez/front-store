import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../components/model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  constructor(private http: HttpClient) { }

  getProductos() {
    //static list
    return [
      { id: 1, nombre: 'Producto 1', precio: 10.99, stock: 100 },
      { id: 2, nombre: 'Producto 2', precio: 19.99, stock: 50 },
      { id: 3, nombre: 'Producto 3', precio: 14.99, stock: 75 }
    ];
    //return this.http.get<Producto[]>(this.url);
  }
}
