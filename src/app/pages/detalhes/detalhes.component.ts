import { Component, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  funcionario?: Funcionarios
  id!: number

  constructor(private funcionarioService: FuncionarioService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.id = Number(this.router.snapshot.paramMap.get('id'))

    this.funcionarioService.GetFuncionariosById(this.id).subscribe((data => {
      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR')
      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR')

      this.funcionario = dados;
    }))
  }

  ativaFuncionario(){
    this.funcionarioService.AtivaFuncionario(this.id).subscribe((data =>{
      this.route.navigate(['']);
    }))
  }

}
