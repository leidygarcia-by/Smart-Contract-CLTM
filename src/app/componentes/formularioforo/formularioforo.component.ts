import { Component, OnInit } from '@angular/core';
import { SrformforoService } from './srformforo.service';

@Component({
  selector: 'app-formularioforo',
  templateUrl: './formularioforo.component.html',
  styleUrls: ['./formularioforo.component.css']
})
export class FormularioforoComponent implements OnInit {

  articulos=null;
 
  art={
    ID:null,
    nombre:null,
    apellido:null,
    asunto_liquidacion:null
  }

  constructor(private SrformforoServicio: SrformforoService) {}
  
//Realiza el llamado de los registros a la pagina
  ngOnInit() {
    this.recuperarTodosforo();
  }

//Metodo que realiza el llamado de los datos de la base de datos

  recuperarTodosforo() {
    this.SrformforoServicio.recuperarTodosforo().subscribe(result => this.articulos = result);
  }

/*Metodo que realiza el envio de los datos a la base de datos comprobando las variables
que esta creadas en la clase art, por ello es necesario en el templete hacer la interpolacion y el
uso de directivas para leer y escribir los datos*/

  altaforo() {
    this.SrformforoServicio.altaforo(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodosforo();
      }
    });
    window.location.reload();
  }

}
