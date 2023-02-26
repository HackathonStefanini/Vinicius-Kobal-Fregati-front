import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Jogador } from '../entities/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

    private readonly API = `${environment.urlBackend}/jogador`
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get(`${this.API}`);
    }
    
    cadastrar(jogador: Jogador): Observable<any> {
      return this.http.post(`${this.API}`, jogador)
  }

}