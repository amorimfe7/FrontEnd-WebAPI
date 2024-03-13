import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    FuncionarioFormComponent,
    EditarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
