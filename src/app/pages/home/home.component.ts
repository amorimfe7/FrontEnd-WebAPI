import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionarios } from '../../models/Funcionarios';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionarios[] = [];
  funcionariosFiltro: Funcionarios[] = [];

  colunas = ['Status','ID', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir']

  constructor(private funcionarioService : FuncionarioService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((data =>{
      const dados = data.dados;

      dados.map(funcionario =>{
        funcionario.dataDeCriacao = new Date(funcionario.dataDeCriacao!).toLocaleDateString('pt-br');
        funcionario.dataDeAlteracao = new Date(funcionario.dataDeAlteracao!).toLocaleTimeString('pt-br');
      })

      this.funcionarios = dados;
      this.funcionariosFiltro = dados;
    }))
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosFiltro.filter(funcionario =>{
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  searchId(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toString();

    this.funcionarios = this.funcionariosFiltro.filter(funcionario =>{
      return funcionario.id?.toString().includes(value);
    })
  }

  openDialog(funcionarioId: number){
    this.dialog.open(ExcluirComponent,{
      width: '400px',
      height: '400px',
      data:{
        id: funcionarioId
      }
    });
  }

}

