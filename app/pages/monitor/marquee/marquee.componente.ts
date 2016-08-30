import { Component } from '@angular/core';

import { MensajesMarquee } from '../../../../app/data/marquee';
import { promesasMensajesMarquee } from '../../../providers/monitor.promesas.marquee';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({

  selector: 'componente-de-marquee',
  providers: [ promesasMensajesMarquee ],
  styleUrls: ['app/theme/app.core.scss'],
  templateUrl: '../app/pages/monitor/marquee/marquee.componente.html'

})
/////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////

export class componenteMarquee  {
//
//
//    inputvalue = null;
//
//
//
//   nombre:string;
//
// abcFun(){
//   console.log(this.nombre);
// }
// abcFunn(){
//   console.log(this.inputvalue);
// }
//
// abcFun2(){
//             this.inputvalue = (<HTMLInputElement>document.getElementById("hola")).value;
//             console.log(this.inputvalue);
//           }
//  ngOnInit() {
//
//
//    this.abcFun2();
//  }
//
//
mensajeList = [];


constructor(public promesasmensajesmarquee: promesasMensajesMarquee){
//variables y tipos
var nombre:string ='juanluisclaure';
var edad:number = 25;
var upOrDown:boolean = true;
var langs:Array<string> = ['hola' , 'vida', 'desde', 'la', 'vista', 'de', 'claure'];
var mensajeList: MensajesMarquee[];






// var a = 7;
// var b = 12;
// //la difrencia ere utilizar var y tuilizar let
// if( a === 7 ){
//     let a = 4;
//     let b = 4;
//
//     console.log("dataos "+ a +" y "+b);
// }
// console.log("datos "+ a +" y "+b);

}
getModel():any{
  return this.mensajeList;
}

soltarMensajes(){
  this.promesasmensajesmarquee.AgarrandoMensajesMarquee()
  .then(value => {

    this.mensajeList = value;
    console.log(this.mensajeList);//buena practica poner value
    //buena practica poner value

  }).catch(error => {

    console.log('es un error');

  })
}


recuperarEspecifico(){
  this.promesasmensajesmarquee.AgarrandoMensajesMarquee()
  .then(value => {

    this.mensajeList = value;
    var mensaje = this.mensajeList[4]
    console.log(mensaje);

  }).catch(error => {

    console.log('es un error');

  })

}


 // agregarPropiedad(mensajeList:any){
 //
 //    var mensaje = mensajeList[0];
 //    return mensaje;
 //
 //  }



 devuelveNumero(num:number):string{

return "devuelve el numero "+num;


}

//al final lo que hace es una validacion de los inputs y luego mandando un protocolo
CertficaCodifica(value:string):number{

if(value = "hola"){
    var edad = 66;
}else{

  var edad = 99;
}

return edad;


}


































  ngOnInit() {

    this.soltarMensajes();

    this.recuperarEspecifico()


  }














}
