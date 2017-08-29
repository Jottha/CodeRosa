import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Charges } from './charges';

@NgModule({
  declarations: [
    Charges,
  ],
  imports: [
    IonicPageModule.forChild(Charges),
  ],
  exports: [
    Charges
  ]
})
export class ChargesModule {}
