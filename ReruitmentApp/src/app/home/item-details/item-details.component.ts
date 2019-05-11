import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/class/class';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item:Item;
  initialized = false;
  constructor(
    private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.api.getItem(id).subscribe(x=>{
        this.item=x;
        this.initialized=true;
      })
    });
  }

  onAdd(){

  }

}
