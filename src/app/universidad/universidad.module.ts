import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadPageRoutingModule } from './universidad-routing.module';

import { UniversidadPage } from './universidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadPageRoutingModule
  ],
  declarations: [UniversidadPage]
})
export class UniversidadPageModule {}
