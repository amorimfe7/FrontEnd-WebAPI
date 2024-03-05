import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionarios } from '../../models/Funcionarios';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Funcionarios>();

  @Input() tituloPage!: string;
  @Input() btnAcao!: string;
  
  funcionarioForm! : FormGroup;

  constructor(){}

  ngOnInit(): void {
      this.funcionarioForm = new FormGroup({
        id: new FormControl(0),
        nome: new FormControl(''),
        sobrenome: new FormControl(''),
        departamento: new FormControl(''),
        status: new FormControl(true),
        turno: new FormControl(''),
        dataDeCriacao: new FormControl(new Date()),
        dataDeAlteracao: new FormControl(new Date())
      });
  }

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
