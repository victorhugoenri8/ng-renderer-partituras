import { Component, OnInit} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
import {ServicioService} from '../../service/servicio.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {
// private recibo:String="";
par:any;

url:any=`https://victorapi.ovh`;
  constructor(
    // private _Aroute:ActivatedRoute,
    private http:ServicioService,
    private activeR:ActivatedRoute) {

      this.http.datos().subscribe((e:any)=>{
        console.log(e);


      })
    }

//funcion para renderizar la cancion
cambio(f:string, index:number){

     let fa:any[]=[];
    const e:any=f;
    this.http.llamada(e)
             .subscribe((id:any)=>
      {

                let data:any=id[index];

          for (const s in data)
          {
              if (data.hasOwnProperty(s))
              {
                    let element = data.ARCHIVO;
                      // fa.push(element)


                       for (const key of element) {

                                   const el = key.formats.large.url;





                                   fa.push(el);




                       }


                }



            }

            let da:any= new Set(fa);

              da.forEach((element:any)=> {
                //const el = da[g].value;
              //  console.log(el);

                let imagen = document.createElement("img");


                   imagen.src=` https://victorapi.ovh${element}`;
                   imagen.setAttribute("class", "img-fluid");
                  imagen.alt="Responsive image";
                   var div = document.getElementById("mostrar");
                   div.appendChild(imagen);

              });






                //  let img=data.ARCHIVO[0].formats.large.url;

                              // let imagen = document.createElement("img");
                              //
                              //
                              //    imagen.src=` http://localhost:1337${img}`
                              //    var div = document.getElementById("mostrar");
                              //    div.appendChild(imagen);




    })



             // this._Aroute.params.subscribe(parametros =>{
             //    this.recibo = parametros.name;
             //   console.log(this.recibo);
             //  return this.recibo
             // })
}
  ngOnInit() {
this.activeR.params.subscribe( (data:any) => {
let string:any=data.name;
let id:number=data.id;
this.cambio(string, id);
  console.log(data);})

  }

}
