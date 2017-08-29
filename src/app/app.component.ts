import { Signin } from './../pages/signin/signin';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Home } from '../pages/home/home';
import { CodeRosa } from '../pages/codeRosa/codeRosa';
import { Integrantes } from '../pages/integrantes/integrantes';
import { Videos } from '../pages/videos/videos';
import { Charges } from '../pages/charges/charges';
import { Eventos } from '../pages/eventos/eventos';

import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public af: AngularFire) {
    
  this.rootPage = Home;

  this.pages = [
      
      { title: 'Home', component: Home, icon: 'home' },
      { title: 'Code Rosa', component: CodeRosa , icon: 'bulb'},
      { title: 'Integrantes', component: Integrantes, icon: 'woman'},
      { title: 'Vídeos', component: Videos, icon: 'videocam' },
      { title: 'Imagens', component: Charges, icon: 'images' },
      { title: 'Eventos', component: Eventos, icon: 'calendar' },
      { title: 'Sign In', component: Signin, icon: 'log-in' }

    ];
    
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToPage(page) {
    this.nav.setRoot(page);
  }
}