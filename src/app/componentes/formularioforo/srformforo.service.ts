import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrformforoService {

  url='http://localhost/PaginaWebBlockchain/';

  constructor(private http: HttpClient) { }

  recuperarTodosforo() {
    return this.http.get(`${this.url}recuperarTodosforo.php`);
  }

  altaforo(articulo) {
    return this.http.post(`${this.url}altaforo.php`, JSON.stringify(articulo));    
  }

}
