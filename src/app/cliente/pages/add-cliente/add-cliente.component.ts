import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
})
export class AddClienteComponent implements OnInit {
  constructor(
    private route: Router,
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private fb: FormBuilder
  ) {}

  clienteNew: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    createAt: new Date(),
  };
  clienteForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.email]],
    createAt: ['', Validators.required],
  });

  get nombre() {
    return this.clienteForm.get('nombre');
  }
  get apellido() {
    return this.clienteForm.get('apellido');
  }
  get email() {
    return this.clienteForm.get('email');
  }

  get createAt() {
    return this.clienteForm.get('createAt');
  }

  cancelar() {
    this.route.navigateByUrl('/clientes/list');
  }
  ngOnInit(): void {
    console.log('clienteForm', this.clienteForm.value);
    if (!this.route.url.includes('edit')) {
      return;
    }

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.clienteService.getClienteById(id)),
        tap((data) => {
          this.clienteNew = data.clienteDto;
          this.clienteForm.patchValue(this.clienteNew);
        })
      )
      .subscribe({
        next: () => {
          console.log('next', this.clienteNew);
        },
        error: (err) => {},
      });
  }

  fieldRequiredError(field: string): boolean {
    return (
      this.clienteForm.get(field)?.invalid &&
      this.clienteForm.get(field)?.errors?.['required']
    );
  }

  fieldValidEmail(field: string) {
    return this.clienteForm.get(field)?.errors?.['email'];
  }

  guardar() {
    /* caso update */
    if (this.clienteNew.id) {
      /* tomo el valor actual del cliente creando constante  */
      const clienteUpdate = { ...this.clienteNew, ...this.clienteForm.value };
      this.clienteService.updateCliente(clienteUpdate).subscribe({
        next: (resp) => {
          this.route.navigateByUrl('/clientes/list');
        },
        error: (err) => {},
      });
    } else {
      const body = this.clienteForm.value;
      this.clienteService.addCliente(body).subscribe({
        next: () => {
          this.route.navigateByUrl('/clientes/list');
        },
        error: (err) => {},
      });
    }
  }
}
