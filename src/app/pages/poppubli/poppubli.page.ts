import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poppubli',
  templateUrl: './poppubli.page.html',
  styleUrls: ['./poppubli.page.scss'],
})
export class PoppubliPage implements OnInit {

  constructor(private popoverrese:PopoverController) { }

  ngOnInit() {
  }

  ClosePopoverRese(){
    this.popoverrese.dismiss();
  }

}
