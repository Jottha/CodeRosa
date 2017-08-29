import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Integrantes } from './integrantes';

@NgModule({
  declarations: [
    Integrantes,
  ],
  imports: [
    IonicPageModule.forChild(Integrantes),
  ],
  exports: [
    Integrantes
  ]
})
export class IntegrantesModule {}
