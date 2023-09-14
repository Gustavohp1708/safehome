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

  moradores:Morador[] = [];

  constructor(private servico:MoradorService){ }

  selecionar():void{
    this.servico.selecionar().subscribe(retorno => this.moradores = retorno);
  }

  ngOnInit(){
    this.selecionar();
  }
}
