import { Injectable } from '@angular/core';
import { Item } from '../class/class';
import { Subject } from 'rxjs';
import { ItemListComponent } from 'src/app/home/item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:Item[]=[];

  private newItemSource = new Subject<Item[]>();
  public newItem = this.newItemSource.asObservable();

  constructor() { }

  public addItem(item:Item){
    this.items.push(item);
    this.newItemSource.next(this.items);
  }

  public getItems():Item[]{
    return this.items;
  }


}
