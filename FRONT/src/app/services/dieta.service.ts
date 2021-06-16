import { HttpClient } from '@angular/common/http';
import { Dieta } from './../models/Dieta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  private baseURL = "http://localhost:1234/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Dieta[]>{
    return this.http.get<Dieta[]>(`${this.baseURL}dieta/listar`);
  }

  cadastrar(dieta: Dieta): Observable<Dieta>{
    return this.http.post<Dieta>(`${this.baseURL}dieta/cadastrar`, dieta);
  }

}
