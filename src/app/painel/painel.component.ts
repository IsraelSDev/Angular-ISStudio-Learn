import { Component, OnInit } from '@angular/core';
import Frase from '../shared/frases.model'
import Frases from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})

export class PainelComponent implements OnInit {

  public frases: Frase[] = Frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public fraseDaRodada: Frase
  public currentProgress: number = 0;


  constructor() {
    this.fraseDaRodada = this.frases[this.rodada];
    console.log(this.fraseDaRodada)
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }
  checkResponse(): void {
    if (this.resposta.trim() == this.fraseDaRodada.frasePtBr) {

      this.rodada++;
      this.fraseDaRodada = this.frases[this.rodada];
      alert("Parabéns, frase correta!!! ")
      this.currentProgress = this.currentProgress + (100 / this.frases.length)

    }
    else {

      console.log(this.resposta)
      alert("Não")

    }

  }

  ngOnInit(): void {

  }
}
