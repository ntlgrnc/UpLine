import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-poprese',
  templateUrl: './poprese.page.html',
  styleUrls: ['./poprese.page.scss'],
})
export class PopresePage implements OnInit {

  constructor(private popoverrese:PopoverController) { }

  ngOnInit() {
  }

  ClosePopoverRese(){
    this.popoverrese.dismiss();
  }

}
