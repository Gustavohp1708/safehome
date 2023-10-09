import { Component } from '@angular/core';
import { Morador } from 'src/app/models/Morador';
import { MoradorService } from 'src/app/services/morador.service';

@Component({
  selector: 'app-morador',
  templateUrl: './morador.component.html',
  styleUrls: ['./morador.component.css']
})
export class MoradorComponent {

  morador = new Morador();

  btnCadastro:boolean = true;

  btnCadastrarMoradores:boolean = false;

  tabela:boolean = false;

  moradores:Morador[] = [];

  constructor(private servico:MoradorService){ }

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.moradores = retorno);

    this.tabela = true;
  }

  exibirForm():void{
    this.btnCadastrarMoradores = true;
  }

  cadastrar():void{
    this.servico.cadastrar(this.morador).subscribe(retorno => { this.moradores.push(retorno);});

    this.morador = new Morador();
    alert("Cliente cadastrado com sucesso.")
  }

  selecionarMorador(posicao:number):void{
    this.morador = this.moradores[posicao];

    this.btnCadastro = false;
    this.tabela = false;
  }

  
}
