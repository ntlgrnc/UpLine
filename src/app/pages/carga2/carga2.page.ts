import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga2',
  templateUrl: './carga2.page.html',
  styleUrls: ['./carga2.page.scss'],
})
export class Carga2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(this.redireccionar,4000);
  }

  redireccionar() {
    window.location.href='tab';
  }

}
