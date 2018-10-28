import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss']
})
export class PagesTopComponent implements OnInit {
 orangeImgSrc = 'assets/images/logo-Orange.png';
  userName = 'Folisise Chosielie';
  userPost = 'Musician, Player';

  sidebarToggle = true;
  tip = { ring: true, email: true };
  //
  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
  }

  public _sidebarToggle() {

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
    //
  }



}
