import { Component, OnInit } from '@angular/core';
import { SforoService } from './sforo.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public page: number;
  articulos=null;
 
  art={
    ID:null,
    asunto_licitacion:null,
    descripcion:null
  }
  constructor(private SforoServicio: SforoService) {}

  //Realiza el llamado de los registros a la pagina
  ngOnInit() {
    this.recuperarTodosforo();
    
  }

  //Metodo que realiza el llamado de los datos de la base de datos
  recuperarTodosforo() {
    this.SforoServicio.recuperarTodosforo().subscribe(result => this.articulos = result);
  }
  
  /*Valida la existensia de registros en la base de datos para llamar iniciar el contenido
  de la pagina*/
  hayRegistros() {
    return true;
  } 

  Link(){
    window.location.href = "http://localhost:4240";
  }
}
