import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SforoService {

  url='http://localhost/PaginaWebBlockchain/';

  constructor(private http: HttpClient) { }

  recuperarTodosforo() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }



}
