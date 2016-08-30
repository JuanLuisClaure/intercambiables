import { Component } from '@angular/core';

import { videosJson } from '../../../../app/data/videos';
import { promesasVideos } from '../../../providers/monitor.promesas.videos';








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



@Component({
  selector: 'componente-de-video',
  providers: [ promesasVideos ],
  styleUrls: ['app/theme/app.core.scss'],


  template:
  `


  <sm-list class="bulleted relaxed">
        <img *ngFor="let x of videoList"  [src]="x.video" class="imagen-formato">
  </sm-list>







  `

})





/////////////////////////////////////////////////////////////////////////////////////////////////////////7777777




export class componenteDeVideo  {

videoList: videosJson[];

constructor(private promesasvideos: promesasVideos){}

soltarVideo(){
  this.promesasvideos.AgarrandoVideos()
  .then(value => {

    this.videoList = value.slice(0,1);//buena practica poner value

  }).catch(error => {

    console.log('es un error');

  })
}


ngOnInit() {


  this.soltarVideo();
}



}
