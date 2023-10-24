import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css'],
})
export class ListClientesComponent implements OnInit {
  constructor(private clienteService: ClienteService) {}
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'createAt'];
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: (resp) => {
        this.clientes = resp;
      },

      error: (err) => {},
    });
  }
}
