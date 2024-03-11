import { Component } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionarios } from '../../models/Funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao: string = "Cadastrar";
  tituloPage: string = "Cadastro de Funcionário"

  constructor(private funcionarioService:FuncionarioService, private router: Router){}

  createFuncionario(novoFuncionario : Funcionarios){
    return this.funcionarioService.CreateFuncionario(novoFuncionario).subscribe((data =>{
      this.router.navigate(['/'])
    }))
  }

}
