import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MensajesMarquee } from '../../app/data/marquee';



@Injectable()
export class promesasMensajesMarquee {


  private headers = new Headers({'Content-Type': 'application/json'});
  private MENSAJES = '../../app/MENSAJES';  // URL to web api
  private handleError(error: any): Promise<any> {

      console.error('es un error en las promesas', error); // for demo purposes only
      return Promise.reject(error.message || error);

  }

  constructor(private http: Http) { }



  AgarrandoMensajesMarquee(): Promise<MensajesMarquee[]> {



        return this.http.get(this.MENSAJES)
                   .toPromise().then(

                        response => response.json().data as MensajesMarquee[]

                    ).catch(

                          this.handleError

                      );

  }

  ContenerTiempoExacto(): Promise<MensajesMarquee[]> {

      return new Promise<MensajesMarquee[]>(

      resolve => setTimeout(resolve, 2000)

      ) // delay 2 seconds
      .then(

        () => this.AgarrandoMensajesMarquee()

      );


  }




}
