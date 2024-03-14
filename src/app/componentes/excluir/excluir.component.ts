import { Component, Inject, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {
  dataRecebida: any;
  funcionario!: Funcionarios;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public ref:MatDialogRef<ExcluirComponent> ){}

  ngOnInit(): void {

    this.dataRecebida = this.data;

    this.funcionarioService.GetFuncionariosById(this.dataRecebida.id).subscribe((data =>{
      this.funcionario = data.dados;
    }))

  }
}
