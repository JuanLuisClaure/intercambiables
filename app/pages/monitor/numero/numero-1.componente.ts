import { Component} from '@angular/core';

import { numeroDeTicket } from '../../../../app/data/numero';
import { promesasNumeros } from '../../../providers/monitor.promesas.numeros';








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-numero-2',
  providers: [ promesasNumeros ],
  styleUrls: ['app/theme/app.core.scss'],


  template:
  `




            <div class="box"><div class="ui middle aligned animated list">
              <div class="item">
                <div class="content">

                  <sm-card class="ui centered card" *ngFor="let x of numeroList">
                      <card-title> {{x.id}}</card-title>
                      <card-subtitle> Espera tu turno </card-subtitle>
                      <card-content>
                                  <h1 >{{x.data}}</h1>
                      </card-content>
                      <card-extra>
                            <p>{{x.info}}</p>
                      </card-extra>
                  </sm-card>
                </div>
              </div>

          </div>







  `

})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class componenteDeNumeroSegundo {

numeroList: numeroDeTicket[];

constructor(private promesasnumeros: promesasNumeros){}

soltarVideo(){
  this.promesasnumeros.AgarrandoNumeros()
  .then(value => {

    this.numeroList = value.slice(2,3);//buena practica poner value

  }).catch(error => {

    console.log('es un error');

  })
}


ngOnInit() {


  this.soltarVideo();
}



}
