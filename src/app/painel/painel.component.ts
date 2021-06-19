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

  constructor() { console.log(this.frases) }

  ngOnInit(): void {

  }

}
