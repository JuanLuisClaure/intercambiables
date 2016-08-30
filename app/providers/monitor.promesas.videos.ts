import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { videosJson } from '../../app/data/videos';



@Injectable()
export class promesasVideos {


  private headers = new Headers({'Content-Type': 'application/json'});
  private VIDEOS = '../../app/VIDEOS';  // URL to web api
  private handleError(error: any): Promise<any> {

      console.error('es un error en las promesas', error); // for demo purposes only
      return Promise.reject(error.message || error);

  }

  constructor(private http: Http) { }



  AgarrandoVideos(): Promise<videosJson[]> {



        return this.http.get(this.VIDEOS)
                   .toPromise().then(

                        response => response.json().data as videosJson[]

                    ).catch(

                          this.handleError

                      );

  }

  ContenerTiempoExacto(): Promise<videosJson[]> {

      return new Promise<videosJson[]>(

      resolve => setTimeout(resolve, 2000)

      ) // delay 2 seconds
      .then(

        () => this.AgarrandoVideos()

      );


  }




}
