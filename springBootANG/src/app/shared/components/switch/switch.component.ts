import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input()
  switchName: string;

  @Input()
  switchId: string;

  @Input()
  theme = 'default';

  @Input()
  multiple;

  @Input()
  checked = false;

  constructor() { }
  ngOnInit() {
    this.theme = `switch-wrap switch-wrap-${this.theme}`;
  }
}
