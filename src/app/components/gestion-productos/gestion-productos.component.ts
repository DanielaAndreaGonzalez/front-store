import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../model/Producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-gestion-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent {
  productos:Producto[] = []; // Este debería ser alimentado por un servicio
  producto = { id: null, nombre: '', precio: null, stock: null };
  modalTitle = "Añadir Producto";

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.productos = this.productoService.getProductos();
  }

  openModal(producto: any) {
    if (producto) {
      this.producto = { ...producto };
      this.modalTitle = "Editar Producto";
    } else {
      this.producto = { id: null, nombre: '', precio: null, stock: null };
      this.modalTitle = "Añadir Producto";
    }
    // Abrir el modal aquí, usualmente utilizando jQuery o directamente con Bootstrap JS
  }

  deleteProducto(id: number) {
    // Lógica para eliminar un producto
  }

  onSubmit() {
    if (this.producto.id) {
      // Actualizar producto
    } else {
      // Añadir nuevo producto
    }
    // Cerrar el modal aquí
  }
}
