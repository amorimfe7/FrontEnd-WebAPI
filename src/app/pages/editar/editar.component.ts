import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from '../../models/Funcionarios';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  tituloPage: string = "Editar um Funcionário"
  btnAcao: string = "Editar"
  funcionario!: Funcionarios

  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.funcionarioService.GetFuncionariosById(id).subscribe((data =>{
        this.funcionario = data.dados;

        console.log(this.funcionario);
      }))
  }

  editaFuncionario(editadoFuncionario: Funcionarios){
    this.funcionarioService.EditaFuncionario(editadoFuncionario).subscribe((data =>{
      this.router.navigate(['/']);
    }))
  }

}
