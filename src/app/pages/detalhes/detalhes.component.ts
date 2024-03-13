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

  funcionario!: Funcionarios

  constructor(private funcionarioService: FuncionarioService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'))

    this.funcionarioService.GetFuncionariosById(id).subscribe((data => {
      this.funcionario = data.dados;

      console.log(this.funcionario)
    }))
  }
}
