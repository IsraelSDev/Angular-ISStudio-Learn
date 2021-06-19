import { Component, OnInit } from '@angular/core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit {

  fasHeart = fasHeart
  farHeart = farHeart

  public classDead: string = 'dead'
  public classLifed: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
