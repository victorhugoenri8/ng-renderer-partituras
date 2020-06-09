import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import{ Http, Response} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 public arra:any;

  constructor(  private http:HttpClient) {}
   llamada(e?:any){
    return this.http.get(`https://victorapi.ovh/${e}`)};

    datos(){
     return this.http.get(`https://victorapi.ovh/vicentes`)}

}
