import { Funcionarios } from './../models/Funcionarios';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private urlAPI = `${environment.urlAPI}api/Funcionario`
  constructor(private http: HttpClient) { }

  GetFuncionarios(): Observable<Response<Funcionarios[]>> {
    return this.http.get<Response<Funcionarios[]>>(this.urlAPI);
  }

  CreateFuncionario(novoFuncionario: Funcionarios): Observable<Response<Funcionarios[]>>{
    return this.http.post<Response<Funcionarios[]>>(this.urlAPI, novoFuncionario)
  }

  GetFuncionariosById(funcionarioId : number): Observable<Response<Funcionarios>>{
    return this.http.put<Response<Funcionarios>>(this.urlAPI, funcionarioId)
  }

}
