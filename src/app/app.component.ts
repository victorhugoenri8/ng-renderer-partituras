import { Component,  OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'Partituras Para Guitarron';
  constructor(  private router: Router,
               private titleService: Title,
               private metaService: Meta ) {

  }

  ngOnInit() {
  this.titleService.setTitle(this.title);
  this.metaService.addTags([
    {name: 'keywords', content: 'Musica, Partituras, Guitarron, Mariachi'},
    {name: 'description', content: 'Partituras Para Guitarron de Mariachi'},
    {name: 'robots', content: 'index, follow'}
  ]);
}
 mandarTexto(texto:String){


   this.router.navigate(['/leer', texto]);
  }
}
