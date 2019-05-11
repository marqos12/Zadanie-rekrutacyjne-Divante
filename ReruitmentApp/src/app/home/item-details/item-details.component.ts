import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/class/class';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item:Item;
  initialized = false;
  added=false;
  constructor(
    private route: ActivatedRoute, private api: ApiService,private cartService:CartService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);


     this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.api.getItem(id).subscribe(x=>{
        this.item=x;
        this.added=this.cartService.isAdded(this.item);
        this.initialized=true;

      })
    });
  }

  onAdd(){
      this.cartService.addItem(this.item);
      this.added=true;
  }

}
