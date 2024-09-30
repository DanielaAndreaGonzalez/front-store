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
  selectedProducto!: Producto;
  isModalOpen: boolean = false;
  modalTitle: string = "Añadir Producto";

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (e) => console.error(e)
    });
  }

  openModal(producto?: Producto): void {
    this.selectedProducto = producto ? { ...producto } : { id: 0, name: '', price: 0, stock: 0 };
    this.modalTitle = producto ? "Editar Producto" : "Añadir Producto";
    this.isModalOpen = true;  // Abre el modal
  }

  closeModal(): void {
    this.isModalOpen = false;  // Cierra el modal
  }

  handleSave(producto: Producto): void {
    if (producto.id) {
      this.productoService.updateProducto(producto).subscribe({
        next: (data) => {
          this.loadProductos();
        },
        error: (e) => console.error(e)
      });
    } else {
      this.productoService.addProducto(producto).subscribe({
        next: (data) => {
          this.loadProductos();
        },
        error: (e) => console.error(e)
      });
    }
    this.closeModal();
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe();
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
}
