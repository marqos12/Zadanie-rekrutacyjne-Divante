import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/class/class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  _item:Item;
  initialized:boolean=false;

  @Input('item')
    set allowDay(value: Item) {
    this._item = value;
    this.initialized = true;
}

  constructor() { }

  ngOnInit() {
  }

}
