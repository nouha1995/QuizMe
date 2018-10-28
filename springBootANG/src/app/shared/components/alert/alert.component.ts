import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  type = 'success';

  @Input()
  isCloseAlert = false;
  isClose = false;

  constructor() { }

  ngOnInit() { }

  close() {
    this.isClose = true;
  }
}
