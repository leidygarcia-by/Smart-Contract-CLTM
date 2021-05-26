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

  //Realiza el llamado de los registros a la pagina
  ngOnInit() {
    this.recuperarTodos();
  }

  //Metodo que realiza el llamado de los datos de la base de datos
  recuperarTodos() {
    this.sformularioServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }
    
  /*Metodo que realiza el envio de los datos a la base de datos comprobando las variables
  que esta creadas en la clase art, por ello es necesario en el templete hacer la interpolacion y el
  uso de directivas para leer y escribir los datos*/  
  alta() {
    this.sformularioServicio.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
    window.location.reload();
  }
  
  /*Valida la existensia de registros en la base de datos para llamar iniciar el contenido
  de la pagina*/
  hayRegistros() {
    return true;
  } 
}
