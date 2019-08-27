import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {

  versuchskaninchen: number = 13;
  anzahl: number = 15;
  ergebnis = "Die Zahl";

  constructor() { }

  fermattest() {
    let zeuge = 2;
    //Berechne zeuge^(versuchskaninchen-1) moidulo Versuchskaninchen
    let zwischenergebnis =1;
    for(let i = 0; i < this.versuchskaninchen-1; i++){

      zwischenergebnis = zwischenergebnis * zeuge;
    }
    if(zwischenergebnis === 1) {
      this.ergebnis += zeuge + 'ist wahrscheinlich eine Primzahl';

    }else{
      this.ergebnis += zeuge + 'ist wahrscheinlich keine Primzahl';

    }


    //zwischenergebnis = zwischenergebnis % this.versuchskaninchen;
    //this.ergebnis = 'Zwischenergebnis:' + zwischenergebnis;

  }

  ngOnInit() {
  }

}