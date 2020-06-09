import { RouterModule, Routes } from '@angular/router';
 import {ArtistasComponent} from '../app/component/artistas/artistas.component';
import {CancionesComponent} from '../app/component/canciones/canciones.component';
import {LeerComponent} from '../app/component/leer/leer.component';

const app_routes: Routes = [

  { path: 'canciones/:name', component: CancionesComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'leer/:name/:id', component: LeerComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'artistas' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
