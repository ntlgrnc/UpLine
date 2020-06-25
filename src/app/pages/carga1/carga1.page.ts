import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga1',
  templateUrl: './carga1.page.html',
  styleUrls: ['./carga1.page.scss'],
})
export class Carga1Page implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(this.redireccionar,3000);
  }

  redireccionar() {
    window.location.href='fin-registro';
  }

}
