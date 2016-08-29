import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { urlsTemplate } from '../../app/data/urls';



@Injectable()
export class servicioUrls {


  private headers = new Headers({'Content-Type': 'application/json'});
  private URLS = '../../app/jsondeurls';  // URL to web api
  private handleError(error: any): Promise<any> {

      console.error('es un error en las promesas', error); // for demo purposes only
      return Promise.reject(error.message || error);

  }

  constructor(private http: Http) { }



  AgarrandoUrls(): Promise<urlsTemplate[]> {



        return this.http.get(this.URLS)
                   .toPromise().then(

                        response => response.json().data as urlsTemplate[]

                    ).catch(

                          this.handleError

                      );

  }

  ContenerTiempoExacto(): Promise<urlsTemplate[]> {

      return new Promise<urlsTemplate[]>(

      resolve => setTimeout(resolve, 2000)

      ) // delay 2 seconds
      .then(

        () => this.AgarrandoUrls()

      );


  }




}
