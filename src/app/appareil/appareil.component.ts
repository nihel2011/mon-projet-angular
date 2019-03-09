import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
    appareilName: string;
  @Input()
  appareilStatus: boolean;

  constructor() { }

  ngOnInit() {
  }
  getStatuts() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
