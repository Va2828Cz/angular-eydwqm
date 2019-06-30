import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabw-caesar',
  templateUrl: './sabw-caesar.component.html',
  styleUrls: ['./sabw-caesar.component.css']
})
export class SabwCaesarComponent implements OnInit {
  zahl = 12;

  rotation = 'rotate(318.4615384615384615384615deg)';

  dreheScheibe(){
    /* console.log("Hallo"); */
    let dag = 360 - 360 / 26 * this.zahl;

    this.rotation = 'rotate(' +dag +  'deg)';
    
  }

  constructor() { }

  ngOnInit() {
  }

}