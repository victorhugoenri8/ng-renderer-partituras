import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {ServicioService} from './service/servicio.service';

import { FormsModule } from '@angular/forms';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistasComponent } from './component/artistas/artistas.component';
import { CancionesComponent } from './component/canciones/canciones.component';
import { LeerComponent } from './component/leer/leer.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    CancionesComponent,
    LeerComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-universal-demystified'}),
    FormsModule,
    app_routing,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
