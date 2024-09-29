import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../model/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-producto.component.html',
  styleUrl: './modal-producto.component.css'
})
export class ModalProductoComponent {
  @Input() producto: Producto;
  @Output() productoChange = new EventEmitter<Producto>();
  @Input() show?: boolean;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<Producto>();

  modalTitle: string = "Añadir Producto";

  constructor() {
    this.producto = { id: 0, nombre: '', precio: 0, stock: 0};
   }

  close() {
    this.closeEvent.emit();
  }

  onSubmit() {
    this.saveEvent.emit(this.producto);
    this.close();
  }
}
