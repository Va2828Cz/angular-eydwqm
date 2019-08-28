import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {

  versuchskaninchen: number = 13;
  anzahl: number = 3;
  ergebnis = "";

  constructor() { }

  fermattest() {
    if (this.anzahl > this.versuchskaninchen) {
      this.ergebnis = 'Fehler: Durchführanzahl ist größer als Zahl';

    } else {
      let endergebnis = true;

      for (let zeuge = 2; zeuge < this.anzahl + 2; zeuge++) {


        //Berechne zeuge^(versuchskaninchen-1) moidulo Versuchskaninchen
        let zwischenergebnis = 1;



        for (let i = 0; i < this.versuchskaninchen - 1; i++) {

          zwischenergebnis = zwischenergebnis * zeuge;
          zwischenergebnis = zwischenergebnis % this.versuchskaninchen;
        }
        if (zwischenergebnis === 1) {
          //this.ergebnis += ' Zeuge ' + zeuge + ': OK ';

        } else {
          //this.ergebnis += ' Zeuge ' + zeuge + ': Nicht OK. ';
          endergebnis = false;
          zeuge = this.anzahl + 2;

        }
      }

      if (endergebnis === true) {

        this.ergebnis = 'Die Zahl ' + this.versuchskaninchen + ' ist wahrscheinlich eine Primzahl. '
      } else {
        this.ergebnis = 'Die Zahl ' + this.versuchskaninchen + ' ist keine Primzahl. '
      }
    }

  }

  ngOnInit() {
  }

}