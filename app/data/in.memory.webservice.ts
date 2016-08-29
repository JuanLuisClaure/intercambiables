import { InMemoryDbService } from 'angular2-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {





  createDb() {

    let jsondeurls = [

      {id: 11, data: '/home', nombre:'home'},
      {id: 12, data: '/presentacion', nombre:'presentacion'},
      {id: 13, data: '/ticketera', nombre:'ticketera'},
      {id: 14, data: '/dashboard', nombre:'dashboard'},
      {id: 15, data: '/monitor', nombre:'monitor'}


    ];
    let sessions = [

      {id: 11, data: '/home', nombre:'home12'},
      {id: 12, data: '/login', nombre:'login13'},
      {id: 13, data: '/calculadora', nombre:'calculadora14'},
      {id: 14, data: '/presupuesto', nombre:'presupuesto15'},

    ];







    return {jsondeurls, sessions};
    }

}
