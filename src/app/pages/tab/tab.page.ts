import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private route: Router) { }

  id = localStorage.getItem('idLogin');

  ngOnInit() {
    if(this.id == null){
      this.route.navigate(['inicio-sesion']);
    }  
  }
  
}
