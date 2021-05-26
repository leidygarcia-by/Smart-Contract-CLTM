import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SconsultaService {

  url='http://localhost/PaginaWebBlockchain/';

  constructor(private http: HttpClient) { }

  recuperarTodosforo() {
    return this.http.get(`${this.url}recuperarTodosforo.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(ID:number) {
    return this.http.get(`${this.url}baja.php?ID=${ID}`);
  }
}
