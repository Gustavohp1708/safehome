import { Visitante } from './../models/Visitante';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Visitante[]>{
    return this.http.get<Visitante[]>("http://localhost:8080/buscarvisitante");
  }

  cadastrar(visitante:Visitante):Observable<Visitante>{
    return this.http.post<Visitante>("http://localhost:8080/cadastrarvisitante", visitante);
  }

  editar(visitante:Visitante):Observable<Visitante>{
    return this.http.put<Visitante>("http://localhost:8080/editarvisitante", visitante);
  }

  remover(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/deletarvisitante' + id);
  }
}
