import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Morador } from '../models/Morador';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Morador[]>{
    return this.http.get<Morador[]>('http://localhost:8080/selecionar');
  }
}
