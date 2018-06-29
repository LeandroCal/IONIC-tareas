import { Component } from '@angular/core';

import { PendienteComponent } from '../pendiente/pendiente.component';
import { TerminadoComponent } from '../terminado/terminado.component';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendienteComponent;
  tab2Root = TerminadoComponent;

  constructor() {

  }
}
