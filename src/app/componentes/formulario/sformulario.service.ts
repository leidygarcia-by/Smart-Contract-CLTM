import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SformularioService {

  url='http://localhost/PaginaWeb/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(ID:number) {
    return this.http.get(`${this.url}baja.php?ID=${ID}`);
  }
}
