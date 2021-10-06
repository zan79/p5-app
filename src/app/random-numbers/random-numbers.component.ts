import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'randnum',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.css']
})
export class RandomNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randnums = [
    this.getRandom(),
    this.getRandom(),
    this.getRandom(),
    this.getRandom(),
    this.getRandom(),
    this.getRandom(),
  ] ;
  selected:any;

  getRandom(){
    return Math.floor(Math.random() * 46 + 1);
  }

  displaySelected(index: number){
    this.selected = this.randnums[index];
  }
}
