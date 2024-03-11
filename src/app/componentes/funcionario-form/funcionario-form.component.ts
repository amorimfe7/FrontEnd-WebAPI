import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionarios } from '../../models/Funcionarios';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Funcionarios>();

  @Input() tituloPage!: string;
  @Input() btnAcao!: string;
  @Input() dadosFuncionario: Funcionarios | null = null;

  funcionarioForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id: 0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome: '', [Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome: '', [Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento: '', [Validators.required]),
      status: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.status: true),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno: '', [Validators.required]),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
