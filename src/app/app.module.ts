import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//permite trabajar con las interacciones entre la api y la vistas
import {HttpClientModule} from '@angular/common/http';
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
import { ManosComponent } from './makeup/manos/manos.component';
import { MaquillajeComponent } from './makeup/maquillaje/maquillaje.component';
import { ExtrasComponent } from './makeup/extras/extras.component';
import { AuxExtraComponent } from './makeup/aux-extra/aux-extra.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { InicioCaballerosComponent } from './caballerosdos/inicio-caballeros/inicio-caballeros.component';
import { CortesCaballeroComponent } from './caballerosdos/cortes-caballero/cortes-caballero.component';
import { BarbaCaballeroComponent } from './caballerosdos/barba-caballero/barba-caballero.component';
import { LavadosCaballeroComponent } from './caballerosdos/lavados-caballero/lavados-caballero.component';
import { MainCaballeroComponent } from './caballerosdos/main-caballero/main-caballero.component';



const routes: Routes = [
  //{ path: '', redirectTo: 'caballerosdos/inicio-caballeros', pathMatch: 'full' }, // Redirigir al componente Caballeros por defecto

  
];


@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    InicioComponent,
    DamasComponent,
    AgendarCitaComponent,
    PeinadosComponent,
    CortesComponent,
    InicialComponent,
    LavadoComponent,
    ColorComponent,
    TratamientosComponent,
    PreciosComponent,
    ManosComponent,
    MaquillajeComponent,
    ExtrasComponent,
    AuxExtraComponent,
    PaginaErrorComponent,
    
    InicioCaballerosComponent,
    CortesCaballeroComponent,
    BarbaCaballeroComponent,
    LavadosCaballeroComponent,
    MainCaballeroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
