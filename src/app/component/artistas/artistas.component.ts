import { Component, OnInit} from '@angular/core';
//import {ServicioService} from '../../service/servicio.service';
	import {Router} from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {


      constructor(private router:Router) { }
    cambiar(artista:string){
      console.log(artista );

       this.router.navigate(['/canciones', artista])
    }
      ngOnInit() {
      }

    }
