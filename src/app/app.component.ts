import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoPHP';

  articulos=null;
 
  art={
    ID:null,
    Asunto_Anuncio:null,
    Descripcion:null,
    Telefono1:null,
    Telefono2:null,
    GeneroBanda:null,
    SubGeneroBanda:null,
    Mensaje:null
  }
  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }
  
  alta() {
    this.articulosServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    window.location.reload();
  }
  
  baja(ID) {
    this.articulosServicio.baja(ID).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    window.location.reload();
  }

  

  hayRegistros() {
    return true;
  } 
}