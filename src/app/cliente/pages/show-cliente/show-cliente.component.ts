import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, ClienteAll } from '../../interfaces/cliente.interface';
import { switchMap, tap } from 'rxjs';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css'],
})
export class ShowClienteComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private route: Router
  ) {}
  cliente!: ClienteAll;
  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.clienteService.getClienteById(id)),
        tap((res: ClienteAll) => {
          this.cliente = res;
        })
      )
      .subscribe();
  }

  removeCliente(id: number) {
    this.clienteService.removeClienteById(id).subscribe({
      next: (res) => {
        this.route.navigateByUrl('/clientes/list');
      },

      error: (err) => {},
    });
  }
}
