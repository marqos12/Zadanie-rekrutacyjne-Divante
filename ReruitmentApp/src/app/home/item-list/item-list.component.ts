import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items = [1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {
  }

}
