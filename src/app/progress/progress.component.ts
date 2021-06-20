import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {

  @Input() public currentProgress: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
