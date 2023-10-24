import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { ShowClienteComponent } from './pages/show-cliente/show-cliente.component';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { MaterialModule } from '../material/material.module';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListClientesComponent,
    ShowClienteComponent,
    AddClienteComponent,
    CardClienteComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [CardClienteComponent],
})
export class ClienteModule {}
