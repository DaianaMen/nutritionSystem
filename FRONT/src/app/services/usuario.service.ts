import { HttpClient } from '@angular/common/http';
import { Usuario } from './../models/Usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:1234/";

  constructor(private http: HttpClient) { }

  listarUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}usuario/listar`);
  }
 
  //usuario/listar rota da API
  cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseURL}usuario/cadastrar`, usuario);
  }

}
