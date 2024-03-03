import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionarios } from '../../models/Funcionarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionarios[] = [];
  funcionariosFiltro: Funcionarios[] = [];

  constructor(private funcionarioService : FuncionarioService){}

  //ao iniciar o componente, queremos utilizar o método GetFuncionarios e pegar o retorno do metodo (todos os funcionarios)
  //e adicionar numa variável

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data =>{
      const dados = data.dados;

      dados.map(funcionario =>{
        funcionario.dataDeCriacao = new Date(funcionario.dataDeCriacao!).toLocaleDateString('pt-br');
        funcionario.dataDeAlteracao = new Date(funcionario.dataDeAlteracao!).toLocaleTimeString('pt-br');
      })

      this.funcionarios = dados;
      this.funcionariosFiltro = dados;

      console.log(this.funcionarios)
    }))
  }
}
