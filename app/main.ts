import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


// libreria para responsive con la propiedad flex por porcentajes
 //import 'flexboxgrid/dist/flexboxgrid.min.css';
//importante xs => 0 to 769px
//importante sm => 800 to 991px
//importante md => 992 to 1199px
//importante xs => 1200 to MAXpx

// importing my vendor and polyfiils directly in the main.ts



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
