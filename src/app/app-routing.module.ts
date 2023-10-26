import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DamasComponent } from './componentes/damas/damas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { PeinadosComponent } from './damas/peinados/peinados.component';
import { CortesComponent } from './damas/cortes/cortes.component';
import { InicialComponent } from './damas/inicial/inicial.component';
import { LavadoComponent } from './damas/lavado/lavado.component';
import { ColorComponent } from './damas/color/color.component';
import { TratamientosComponent } from './damas/tratamientos/tratamientos.component';
import { PreciosComponent } from './damas/precios/precios.component';
import { ExtrasComponent } from './makeup/extras/extras.component';
import { ManosComponent } from './makeup/manos/manos.component';
import { MaquillajeComponent } from './makeup/maquillaje/maquillaje.component';
import { AuxExtraComponent } from './makeup/aux-extra/aux-extra.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioCaballerosComponent } from './caballerosdos/inicio-caballeros/inicio-caballeros.component';
import { CortesCaballeroComponent } from './caballerosdos/cortes-caballero/cortes-caballero.component';
import { BarbaCaballeroComponent } from './caballerosdos/barba-caballero/barba-caballero.component';
import { LavadosCaballeroComponent } from './caballerosdos/lavados-caballero/lavados-caballero.component';
import { MainCaballeroComponent } from './caballerosdos/main-caballero/main-caballero.component';

const routes: Routes = [

  {
      path:'',
      pathMatch:'full',redirectTo:'inicio'
  },
  {   path:'inicio',
      component:InicioComponent
  },
  {
    path:'damas',
    component:DamasComponent,
    children:[
      {
        path:'',
        component:InicialComponent
      },
      {
        path:'lavado',
        component:LavadoComponent
      },
      {
        path:'peinados',
        component:PeinadosComponent
      },
      {
        path:'cortes',
        component:CortesComponent
      },
      {
        path:'coloracion',
        component:ColorComponent
      },
      {
        path:'tratamientos',
        component:TratamientosComponent
      },
      {
        path:'preciosDama',
        component:PreciosComponent
      }
    ]
  },
  {
    path:'extras',
    component:ExtrasComponent,
    children:[
      {
        path:'',
        component:AuxExtraComponent
      },
      {
        path:'manos',
        component:ManosComponent
      },
      {
        path:'maquillaje',
        component:MaquillajeComponent
      }
    ]
  },
  {
    path:'agendarCita',
    component:AgendarCitaComponent
  },
  {
    path:'agregar-producto',
    component:AgregarProductoComponent
  },
  {
    path:'listar-producto',
    component:ListarProductoComponent
  },
  {
    path:'editar-producto/:id',
    component:EditarProductoComponent
  },
  { path: 'caballeros', component: InicioCaballerosComponent },
  { path: 'cortes-caballero', component: CortesCaballeroComponent },
  { path: 'barba-caballero', component: BarbaCaballeroComponent },
  { path: 'lavados-caballero', component: LavadosCaballeroComponent },
  { path: 'main-caballero', component: MainCaballeroComponent },
  {
    path:'**',
    component:PaginaErrorComponent
  } 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
