import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Curriculo } from './curriculo';

@NgModule({
  declarations: [
    Curriculo
  ],
  imports: [
    IonicPageModule.forChild(Curriculo),
  ],
  exports: [
    Curriculo
  ]
})
export class CurriculoModule {}
