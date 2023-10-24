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
  email: string = '';
  buscar(termino: string) {
    this.email = termino;
    this.clienteService.getByEmail(this.email).subscribe({
      next: (res) => {
        this.clientes = [];
        this.clientes.push(res.clienteDto);
      },
      error: (err) => {
        this.clientes = [];
      },
    });
  }
}
