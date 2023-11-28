import { Component } from '@angular/core';
import { Visitante } from 'src/app/models/Visitante';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent {

  visitante = new Visitante();

  btnCadastro:boolean = true;

  btnCadastrarMoradores:boolean = false;

  tabela:boolean = false;

  visitantes:Visitante[] = [];

  constructor(private servico:VisitanteService){ }

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.visitantes = retorno);

    this.tabela = true;
  }

  exibirForm():void{
    if (this.btnCadastrarMoradores === true) {
      this.btnCadastrarMoradores = false;
    } else {
      this.btnCadastrarMoradores = true;
    }
  }

  cadastrar():void{
    this.servico.cadastrar(this.visitante).subscribe(retorno => { this.visitantes.push(retorno);});

    this.visitante = new Visitante();
    alert("Visitante cadastrado com sucesso.")
  }

  selecionarVisitante(posicao:number):void{
    this.visitante = this.visitantes[posicao];

    this.btnCadastro = false;
    this.tabela = false;
  }

  editarVisitante():void{
    this.servico.editar(this.visitante).subscribe(retorno => {
      let posicao = this.visitantes.findIndex(obj => {
        return obj.id == retorno.id;
      });

      this.visitantes[posicao] = retorno;

      this.btnCadastro = true;
      this.tabela = true;

      alert('Visitante alterado com sucesso.')
    })
  }

  removerVisitante():void{
    this.servico.remover(this.visitante.id).subscribe(retorno => {

      let posicao = this.visitantes.findIndex(obj => {
        return obj.id == this.visitante.id;
      });

      this.visitantes.splice(posicao, 1);

      this.visitante = new Visitante();
      this.btnCadastro = true;
      this.tabela = true;

      alert('Visitante removido com sucesso.')
    })
  }

  
}
