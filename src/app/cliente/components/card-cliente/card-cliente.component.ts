import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente, ClienteAll } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
})
export class CardClienteComponent {
  @Input() cliente!: ClienteAll;

  @Output() removeClienteEvent = new EventEmitter<number>();

  removeCliente(value: number) {
    this.removeClienteEvent.emit(value);
  }
}
