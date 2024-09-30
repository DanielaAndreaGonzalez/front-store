import { Injectable } from '@angular/core';
import { Producto } from '../components/model/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:8081/api/products';
  constructor(private http: HttpClient ) { }

  getProductos() {
    return this.http.get<Producto[]>(`${this.url}/all`);
  }

  updateProducto(producto: Producto):Observable<any> {
    return this.http.put(`${this.url}/update/${producto.id}`, producto);
  }

  addProducto(producto: Producto):Observable<any> {
    return this.http.post(`${this.url}/create`, producto);
  }

  deleteProducto(id:number):Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
