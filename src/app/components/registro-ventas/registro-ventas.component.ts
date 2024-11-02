import { Component } from '@angular/core';
import { Producto } from '../model/Producto';
import { ProductosService } from '../../services/productos.service';
import { Venta } from '../model/Venta';
import { VentasService } from '../../services/ventas.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ItemVenta } from '../model/ItemVenta';

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
  venta: Venta = { id: 0, quantity: 0, saleDate: new Date(), total: 0, saleItems: [] };
  selectedProduct: number = 0;
  cantidadProducto: number = 0;

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
    this.ventasService.getVentas().subscribe({
      next: (data) => {
        this.ventas = data;
      },
      error: (e) => console.error(e)
    });
  }

  agregarProducto() {
    const producto = this.productos.find(p => p.id == this.selectedProduct);
    if (producto && this.cantidadProducto > 0) {
      const itemVenta: ItemVenta = {
        id: 0, // Esto puede cambiar según cómo manejes los IDs
        product: producto,
        saleId: this.venta.id,
        quantity: this.cantidadProducto
      };
      this.venta.quantity += this.cantidadProducto;
      this.venta.saleItems.push(itemVenta);
      this.actualizarTotal();
      this.cantidadProducto = 0;
      this.selectedProduct = 0;
    }
  }

  actualizarTotal() {
    this.venta.total = this.venta.saleItems.reduce((total, item) => {
      const producto = this.productos.find(p => p.id === item.product.id);
      return total + (producto ? producto.price * item.quantity : 0);
    }, 0);
  }

  registrarVenta() {
    if (this.venta.saleItems.length > 0) {
      this.ventasService.addVenta(this.venta).subscribe({
        next: () => {
          console.log('Venta registrada');
          this.cargarVentas();
          this.venta = { id: 0, quantity: 0, saleDate: new Date(), total: 0, saleItems: [] };
        },
        error: (e) => console.error(e)
      });
    }
  }

  eliminarProducto(index: number) {
    this.venta.saleItems.splice(index, 1);
    this.actualizarTotal();
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      alert("Se guardó el comprobante correctamente.");
    }
  }
}
