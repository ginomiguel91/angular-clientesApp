import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { ShowClienteComponent } from './pages/show-cliente/show-cliente.component';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { MaterialModule } from '../material/material.module';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchEmailInputComponent } from './components/search-email-input/search-email-input.component';

@NgModule({
  declarations: [
    ListClientesComponent,
    ShowClienteComponent,
    AddClienteComponent,
    CardClienteComponent,
    SearchEmailInputComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CardClienteComponent, SearchEmailInputComponent],
})
export class ClienteModule {}
