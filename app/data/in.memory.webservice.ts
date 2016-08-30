import { InMemoryDbService } from 'angular2-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {





  createDb() {

    let URLS = [

      {id: 11, data: '/home', nombre:'home'},
      {id: 12, data: '/presentacion', nombre:'presentacion'},
      {id: 13, data: '/ticketera', nombre:'ticketera'},
      {id: 14, data: '/dashboard', nombre:'dashboard'},
      {id: 15, data: '/monitor', nombre:'monitor'}


    ];
    let VIDEOS = [

      {id: 1, video: 'http://publicdomainvectors.org/photos/Vintage-Travel-Poster-Egypt-3.png'},
      {id: 2, video: 'http://publicdomainvectors.org/photos/Vintage-Travel-Poster-Egypt-3.png'},
      {id: 3, video: 'http://publicdomainvectors.org/photos/Vintage-Travel-Poster-Egypt-3.png'},
      {id: 4, video: 'http://publicdomainvectors.org/photos/Vintage-Travel-Poster-Egypt-3.png'},




    ];
    let NUMEROS = [

      {id: 11, data: 'C4',info:'es su turno'},
      {id: 12, data: 'D6',info:'juanluis'},
      {id: 13, data: 'A207',info:'caja A'},
      {id: 14, data: 'CG78',info:'licenciada Monica'},
      {id: 15, data: 'AA-1',info:'caja de ahorros'}



    ];


    let MENSAJES = [

      {id: 11, data: 'C4'},
      {id: 12, data: 'D6'},
      {id: 13, data: 'A207'},
      {id: 14, data: 'CG78'},
      {id: 15, data: 'AA-1'}



    ];





    return {URLS, VIDEOS, NUMEROS, MENSAJES};
    }

}
