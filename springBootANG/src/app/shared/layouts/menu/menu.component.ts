import {Component, Input, OnInit} from '@angular/core';
import {collapse} from '../../animation/collapse-animate';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})
export class MenuComponent implements OnInit {
  @Input() menuinfo: any;
  //
  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
  }
  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) {
    // this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}
