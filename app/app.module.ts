import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { rutasDeVistas } from './app.routing';
import { NgSemanticModule } from 'ng-semantic';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './data/in.memory.webservice';

//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR Y SERVIDOR PRINCIPALES]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//aca viene el contenedor dentro de body en index.html y su componente que actuar
//como servidor a las diferentes rutas
//=================================================================================

import { contenedorApp }  from './pages/contenedor/app.contenedor';
import { componenteApp }  from './pages/contenedor/servidor/app.componente';
//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR LOGIN Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorDashboard }  from './pages/dashboard/dashboard.contenedor';
import { componenteFormularioDeDashboard }  from './pages/dashboard/formulario/formulario.componente';
//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR LOGIN Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorPresentacion } from './pages/presentacion/presentacion.contenedor';

//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR CALCULADORA Y COMPONENTEN]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes en el mismo sector
//=================================================================================

import { contenedorTicketera } from './pages/ticketera/ticketera.contenedor';

//=================================================================================
//[[[[[[[[[[[[[[[[[[[CONTENEDOR DEL MONITOR]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//ordenadamente se importan contenedor con componenetes de video, tickets y marquee
//=================================================================================

import { contenedorMonitor } from './pages/monitor/monitor.contenedor';
import { componenteDeVideo } from './pages/monitor/video/video.componente';
import { componenteDeTicket } from './pages/monitor/tickets/ticket.componente';
import { componenteMarquee } from './pages/monitor/marquee/marquee.componente';

import { componenteDeNumeroPrimero } from './pages/monitor/numero/numero-0.componente';
import { componenteDeNumeroSegundo } from './pages/monitor/numero/numero-1.componente';
import { componenteDeNumeroTercero } from './pages/monitor/numero/numero-2.componente';








@NgModule({
  imports:      [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), NgSemanticModule, rutasDeVistas ],
  declarations: [
                  contenedorApp,
                  componenteApp,

                  contenedorDashboard ,
                  componenteFormularioDeDashboard,

                  contenedorPresentacion,
                  contenedorTicketera,


                  contenedorMonitor,
                  componenteDeVideo,
                  componenteDeTicket,
                  componenteMarquee,
                  componenteDeNumeroPrimero,
                  componenteDeNumeroSegundo,
                  componenteDeNumeroTercero


                ],
 providers:     [ InMemoryDataService ],

  bootstrap:    [ contenedorApp ]
})


export class AppModule { }
