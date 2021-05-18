import { Component, OnInit } from '@angular/core';
import { SformularioService } from './sformulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

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
  constructor(private sformularioServicio: SformularioService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.sformularioServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }
  
  alta() {
    this.sformularioServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    window.location.reload();
  }
  
  baja(ID) {
    this.sformularioServicio.baja(ID).subscribe(datos => {
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
