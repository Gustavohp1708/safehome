import { Morador } from './../models/Morador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Morador[]>{
    return this.http.get<Morador[]>(this.url);
  }

  cadastrar(morador:Morador):Observable<Morador>{
    return this.http.post<Morador>("http://localhost:8080/cadastrar", morador);
  }

  editar(morador:Morador):Observable<Morador>{
    return this.http.put<Morador>("http://localhost:8080/editar", morador);
  }

  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id);
  }

}
