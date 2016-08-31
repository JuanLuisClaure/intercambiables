import { Component, Input, Output, EventEmitter} from '@angular/core';

import { urlsTemplate } from '../../../../app/data/urls';
import { servicioUrls } from '../../../providers/app.promesas.urls';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({

  selector: 'formulario-componente',
  providers: [ servicioUrls ],
  template: `




      <div *ngFor="let x of urlsList">
        <a routerLink="       ">{{x.nombre}}</a>
      </div>








`



})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class componenteFormularioDeDashboard  {
    @Input() urlsList;
    @Output() infoactual: EventEmitter<any> = new EventEmitter<any>();



  constructor(private serviciourls: servicioUrls) {
    var urlsList: urlsTemplate[];

  }
  // urlsList =[];
        soltarUrls(){
            this.serviciourls.ContenerTiempoExacto()
            .then (value => {

            this.urlsList = value
            console.log(this.urlsList);

              }
            ).catch(error => {

              console.log('no conecta con la promesas');

            })


        }

        mandarInfo(){
          // this.infoactual.emit(this.urlsList);
          console.log(this.urlsList);

        }

        ngOnInit() {

            this.soltarUrls();
            console.log(this.urlsList);
        }



}
