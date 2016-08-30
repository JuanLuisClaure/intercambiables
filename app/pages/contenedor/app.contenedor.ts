import { Component } from '@angular/core';


import { urlsTemplate } from '../../../app/data/urls';
import { servicioUrls } from '../../providers/app.promesas.urls';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({

  selector: 'my-app',
  providers: [ servicioUrls ],
  styleUrls: ['app/theme/app.core.scss'],
  templateUrl: '../app/pages/contenedor/app.contenedor.html',




})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class contenedorApp  {

  urlsList: urlsTemplate[];

  constructor(private serviciourls: servicioUrls) { }

        soltarUrls(){
            this.serviciourls.ContenerTiempoExacto()
            .then (

              value => {this.urlsList = value}
            ).catch(error => {

              console.log('no conecta con la promesas');

            })


        }


        ngOnInit() {

            this.soltarUrls();

        }








}
