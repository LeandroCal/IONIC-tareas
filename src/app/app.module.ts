import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Servicios
import { ListaDeseosService } from './services/lista-deseos.service';

//Pipes
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { PendientesPipe } from './pipes/pendientes.pipes';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { PendienteComponent } from '../pages/pendiente/pendiente.component';
import { TerminadoComponent } from '../pages/terminado/terminado.component';

import { DetalleComponent } from '../pages/detalle/detalle.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    PendientesPipe,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendienteComponent,
    TerminadoComponent,
    AgregarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendienteComponent,
    TerminadoComponent,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
