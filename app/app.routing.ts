import { Routes, RouterModule } from '@angular/router';



import { componenteApp } from './pages/contenedor/servidor/app.componente';
import { componenteHome } from './pages/contenedor/home/home.componente';





import { contenedorDashboard }  from './pages/dashboard/dashboard.contenedor';
import { contenedorPresentacion } from './pages/presentacion/presentacion.contenedor';
import { contenedorTicketera } from './pages/ticketera/ticketera.contenedor';
import { contenedorMonitor } from './pages/monitor/monitor.contenedor';


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
    path: 'monitor',
    component: contenedorMonitor
  }





];






export const rutasDeVistas = RouterModule.forRoot(appRoutes);
