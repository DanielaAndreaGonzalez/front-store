import { Component } from '@angular/core';
import { Producto } from '../model/Producto';
import { ProductosService } from '../../services/productos.service';
import { Venta } from '../model/Venta';
import { VentasService } from '../../services/ventas.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-ventas',
  standalone: true,
  imports: [FormsModule, DatePipe, CurrencyPipe],
  templateUrl: './registro-ventas.component.html',
  styleUrl: './registro-ventas.component.css'
})
export class RegistroVentasComponent {
  productos: Producto[] = [];
  ventas: Venta[] = [];
  venta: Venta = { id: 0,productoId:0,  productoNombre: '', cantidad: 0, fecha: new Date(), total: 0 };

  constructor(private productosService: ProductosService, private ventasService: VentasService) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarVentas();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (e) => console.error(e)
    });
  }

  cargarVentas() {
    this.ventas = this.ventasService.getVentas();
  }

  registrarVenta() {
    if (this.venta.cantidad && this.venta.productoId) {
      this.ventasService.addVenta(this.venta);
      this.cargarVentas(); // Recarga la lista de ventas
      this.venta = { id: 0, productoId: 0,productoNombre: '', cantidad: 0, fecha: new Date(), total: 0 }; // Resetea el formulario
    }
  }

  editarVenta(venta: Venta) {
    this.venta = { ...venta }; // Carga la venta en el formulario para editar
  }

  eliminarVenta(id: number) {
    this.ventasService.deleteVenta(id);
    this.cargarVentas(); // Recarga la lista de ventas
  }
}
