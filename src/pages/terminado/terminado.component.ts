import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminado',
    templateUrl: 'terminado.component.html'
})
export class TerminadoComponent implements OnInit {
    constructor( private _listaDeseos:ListaDeseosService,
                private navCtrl:NavController) {
            console.log(_listaDeseos);
         }

    ngOnInit() { }

    verDetalle(lista, idx){
        this.navCtrl.push(DetalleComponent, {lista,idx});
    }
    
}