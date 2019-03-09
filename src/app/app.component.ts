import { Component } from '@angular/core';
import {Appareil} from './appareil';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth = false;
  appareilOne = 'Iphone';
  appareilTwo = 'Ordinateur';
  appareilThree = 'Frigo';
  lastUpdate: Date = new Date();
  appareils: Appareil[] = [];

  constructor() {

    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
    this.appareils = [
      {
        name: 'Iphone',
        status: true
      },
      {
        name: 'Ordinateur',
        status: false
      },
      {
        name: 'Frigo',
        status: true
      }
    ];

  }
    onAllumer() {
      console.log("On allumer tout !");
    }
  }

