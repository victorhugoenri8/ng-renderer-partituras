import { Component, OnInit } from '@angular/core';
	import {Router, ActivatedRoute} from '@angular/router';
	import {ServicioService} from '../../service/servicio.service';
@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
	datos:any;
	value:string;

  constructor(private router:Router,
							private activeR:ActivatedRoute,
						private http:ServicioService) { }


cambiar(artista:string, id:number){
  console.log(artista , id);

   this.router.navigate(['/leer', artista, id])
}


// llamarDatos(e:string){
//
//
// };
  ngOnInit() {

		this.activeR.params.subscribe( (data:any) => {
		this.value=data.name;
		this.http.llamada(this.value)
						 .subscribe((id:any)=>{
							 this.datos=id;
							 console.log(id);
			})

// this.llamarDatos(string)
// 		  console.log(data.id);
// 			let id:number=data;
// 			console.log(id);

		})
  }

}
