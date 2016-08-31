import { Routes, RouterModule } from '@angular/router';



import { componenteApp } from './pages/contenedor/servidor/app.componente';
import { componenteHome } from './pages/contenedor/home/home.componente';





import { contenedorDashboard }  from './pages/dashboard/dashboard.contenedor';
import { contenedorPresentacion } from './pages/presentacion/presentacion.contenedor';
import { contenedorTicketera } from './pages/ticketera/ticketera.contenedor';
import { contenedorMonitor } from './pages/monitor/monitor.contenedor';
import { contenedorMonitorDos } from './pages/monitor/monitor.dos.contenedor';
import { contenedorMonitorTres } from './pages/monitor/monitor.tres.contenedor';
import { contenedorMonitorCuatro } from './pages/monitor/monitor.cuatro.contenedor';
import { contenedorMonitorCinco } from './pages/monitor/monitor.cinco.contenedor';



const appRoutes: Routes = [


  {
    path: '',
    component:componenteHome
  },


  {
    path: 'home',
    component:componenteHome
  },
  {
    path: 'dashboard',
    component: contenedorDashboard
  },



  {
    path: 'ticketera',
    component: contenedorTicketera
  },
  {
    path: 'presentacion',
    component: contenedorPresentacion
  },
  {
    path: 'monitor_uno',
    component: contenedorMonitor
  },
  {
    path: 'monitor_dos',
    component: contenedorMonitorDos
  },
  {
    path: 'monitor_tres',
    component: contenedorMonitorTres
  },
  {
    path: 'monitor_cuatro',
    component: contenedorMonitorCuatro
  },
  {
    path: 'monitor_cinco',
    component: contenedorMonitorCinco
  }





];






export const rutasDeVistas = RouterModule.forRoot(appRoutes);
