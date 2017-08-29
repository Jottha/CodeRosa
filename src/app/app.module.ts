import { AuthProvider } from './../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { UserProvider } from './../providers/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from "angularfire2";

import { MyApp } from './app.component';
import { CodeRosa } from './../pages/codeRosa/codeRosa';
import { Integrantes } from './../pages/integrantes/integrantes';
import { Videos } from './../pages/videos/videos';
import { Charges } from './../pages/charges/charges';
import { Eventos } from './../pages/eventos/eventos';
import { Curriculo } from '../pages/curriculo/curriculo';
import { Home } from '../pages/home/home';
import { Signup } from './../pages/signup/signup';
import { Signin } from './../pages/signin/signin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

  export const firebaseConfig = {
    apiKey: "AIzaSyAjc_wlj15oEM8P1lxu0vORrYP0AhUOQP0",
    authDomain: "coderosaat.firebaseapp.com",
    databaseURL: "https://coderosaat.firebaseio.com",
    projectId: "coderosaat",
    storageBucket: "",
    messagingSenderId: "1036458743384"
  };

  const firebaseAuthConfig = {
    provider: AuthProviders.Custom,
    method: AuthMethods.Password
  }

@NgModule({
  declarations: [
    MyApp,
    CodeRosa,
    Integrantes,
    Videos,
    Charges,
    Eventos,
    Curriculo,
    Home,
    Signup,
    Signin
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CodeRosa,
    Integrantes,
    Videos,
    Charges,
    Eventos,
    Curriculo,
    Home,
    Signup,
    Signin
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule {}
