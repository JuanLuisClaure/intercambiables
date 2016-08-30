import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { numeroDeTicket } from '../../app/data/numero';



@Injectable()
export class promesasNumeros {


  private headers = new Headers({'Content-Type': 'application/json'});
  private NUMEROS = '../../app/NUMEROS';  // URL to web api
  private handleError(error: any): Promise<any> {

      console.error('es un error en las promesas', error); // for demo purposes only
      return Promise.reject(error.message || error);

  }

  constructor(private http: Http) { }



  AgarrandoNumeros(): Promise<numeroDeTicket[]> {



        return this.http.get(this.NUMEROS)
                   .toPromise().then(

                        response => response.json().data as numeroDeTicket[]

                    ).catch(

                          this.handleError

                      );

  }

  ContenerTiempoExacto(): Promise<numeroDeTicket[]> {

      return new Promise<numeroDeTicket[]>(

      resolve => setTimeout(resolve, 2000)

      ) // delay 2 seconds
      .then(

        () => this.AgarrandoNumeros()

      );


  }




}
