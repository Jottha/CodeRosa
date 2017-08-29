import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Videos } from './videos';

@NgModule({
  declarations: [
    Videos,
  ],
  imports: [
    IonicPageModule.forChild(Videos),
  ],
  exports: [
    Videos
  ]
})
export class VideosModule {}
