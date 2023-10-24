import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
export interface MenuItem {
  ruta: string;
  texto: string;
  icon: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      ruta: '/clientes/list',
      texto: 'Inicio',
      icon: 'home',
    },

    {
      ruta: '/clientes/add',
      texto: 'Agregar cliente',
      icon: 'add',
    },
  ];
}
