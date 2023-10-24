import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { ShowClienteComponent } from './pages/show-cliente/show-cliente.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'list',
        component: ListClientesComponent,
      },
      {
        path: 'add',
        component: AddClienteComponent,
      },
      {
        path: 'edit/:id',
        component: AddClienteComponent,
      },

      {
        path: ':id',
        component: ShowClienteComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
