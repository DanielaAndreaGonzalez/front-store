import { Injectable } from '@angular/core';
import { Venta } from '../components/model/Venta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url = 'http://localhost:8081/api/sales';
  constructor(private http: HttpClient ) { }

  getVentas():Observable<Venta []>{
    return this.http.get<Venta[]>(`${this.url}/all`);
  }

  addVenta(venta:Venta):Observable<any> {
    return this.http.post(`${this.url}/create`, venta);
  }

  deleteVenta(id:number):Observable<any>{
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
