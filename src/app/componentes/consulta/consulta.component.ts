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
    asunto_liquidacion:null,
    nombre:null,
    apellido:null,
  }
  constructor(private sconsultaServicio: SconsultaService) {}

  //Realiza el llamado de los registros a la pagina
  ngOnInit() {
    this.recuperarTodosforo();
  }

  //Metodo que realiza el llamado de los datos de la base de datos
  recuperarTodosforo() {
    this.sconsultaServicio.recuperarTodosforo().subscribe(result => this.articulos = result);
  }
    
  /*Valida la existensia de registros en la base de datos para llamar iniciar el contenido
  de la pagina*/
  hayRegistros() {
    return true;
  } 
}
