import { Component } from '@angular/core';


import { urlsTemplate } from '../../../app/data/urls';
import { servicioUrls } from '../../providers/app.promesas.urls';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({

  selector: 'my-app',
  providers: [ servicioUrls ],
  template: `


<nav >
<ul >
<li *ngFor="let x of urlsList">

<a routerLink="{{x.data}}">{{x.nombre}}</a>

</li>
</ul>


</nav>
    <app-componente></app-componente>








`



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
