import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EditPage } from '../pages/edit/edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage, PostPage, EditPage
  ],
  imports: [
    BrowserModule,
    HttpModule, HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, PostPage, EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
