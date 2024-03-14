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

  private urlAPI = environment.urlAPI;
  constructor(private http: HttpClient) { }

  GetFuncionarios(): Observable<Response<Funcionarios[]>> {
    return this.http.get<Response<Funcionarios[]>>(`${this.urlAPI}/api/Funcionario`);
  }

  CreateFuncionario(novoFuncionario: Funcionarios): Observable<Response<Funcionarios[]>>{
    return this.http.post<Response<Funcionarios[]>>(`${this.urlAPI}/api/Funcionario`, novoFuncionario)
  }

  GetFuncionariosById(id : number): Observable<Response<Funcionarios>>{
    return this.http.get<Response<Funcionarios>>(`${this.urlAPI}/api/Funcionario/${id}`)
  }

  EditaFuncionario(editadoFuncionario : Funcionarios): Observable<Response<Funcionarios[]>>{
    return this.http.put<Response<Funcionarios[]>>(`${this.urlAPI}/api/Funcionario`, editadoFuncionario)
  }

  InativaFuncionario(id : number): Observable<Response<Funcionarios>>{
    return this.http.put<Response<Funcionarios>>(`${this.urlAPI}/inativaFuncionario/${id}`, id)
  }

  AtivaFuncionario(id: number) : Observable<Response<Funcionarios>>{
    return this.http.put<Response<Funcionarios>>(`${this.urlAPI}/ativaFuncionario/${id}`, id)
  }

  DeletaFuncionario(id: number): Observable<Response<Funcionarios>> {
    return this.http.delete<Response<Funcionarios>>(`${this.urlAPI}/api/Funcionario/${id}`);
  }
}
