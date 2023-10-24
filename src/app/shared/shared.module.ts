import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ClienteRoutingModule } from '../cliente/cliente-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ClienteRoutingModule,
    MaterialModule,
  ],
  exports: [MenuComponent],
})
export class SharedModule {}
