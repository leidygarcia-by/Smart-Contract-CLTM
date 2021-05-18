import { Component, OnInit } from '@angular/core';
import { SconsultaService } from './sconsulta.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

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
  constructor(private sconsultaServicio: SconsultaService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.sconsultaServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }
  
  alta() {
    this.sconsultaServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    window.location.reload();
  }
  
  baja(ID) {
    this.sconsultaServicio.baja(ID).subscribe(datos => {
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
