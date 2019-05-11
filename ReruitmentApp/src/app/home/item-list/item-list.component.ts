import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { Item } from 'src/app/shared/class/class';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items:Item[] = [];

  constructor(private router: Router, private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getItems().subscribe(
      x=>{
        this.items=x;
      }
    );
  }

  itemDetails(item:Item){
    this.router.navigate(['/home/item',item.id]);
  }

}
