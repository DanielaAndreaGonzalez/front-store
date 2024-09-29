import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../model/Producto';
import { ProductosService } from '../../services/productos.service';
import { ModalProductoComponent } from '../modal-producto/modal-producto.component';

@Component({
  selector: 'app-gestion-productos',
  standalone: true,
  imports: [FormsModule, ModalProductoComponent],
  templateUrl: './gestion-productos.component.html',
  styleUrl: './gestion-productos.component.css'
})
export class GestionProductosComponent {
  productos: Producto[] = [];
  selectedProducto!: Producto;  // Usaremos esto para el modal
  isModalOpen: boolean = false;  // Controla la visibilidad del modal
  modalTitle: string = "Añadir Producto";

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productos = this.productoService.getProductos();
  }

  openModal(producto?: Producto): void {
    this.selectedProducto = producto ? { ...producto } : { id: 0, nombre: '', precio: 0, stock: 0 };
    this.modalTitle = producto ? "Editar Producto" : "Añadir Producto";
    this.isModalOpen = true;  // Abre el modal
  }

  closeModal(): void {
    this.isModalOpen = false;  // Cierra el modal
  }

  handleSave(producto: Producto): void {
    if (producto.id) {
      this.productoService.updateProducto(producto);  // Actualiza el producto
    } else {
      this.productoService.addProducto(producto);  // Añade el producto
    }
    this.closeModal();  // Cierra el modal
    this.loadProductos();  // Recarga la lista de productos
  }

  deleteProducto(id: number): void {
    //this.productoService.deleteProducto(id);  // Elimina el producto
    this.loadProductos();  // Recarga los productos
  }
}
