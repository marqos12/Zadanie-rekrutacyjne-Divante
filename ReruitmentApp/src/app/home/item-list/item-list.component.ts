import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { Item } from 'src/app/shared/class/class';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];
  failed = false;
  constructor(private router: Router, private apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.apiService.getItems().subscribe(
      x => {
        this.items = x;
        //this.spinner.hide();
      },
      e => {
        console.log("Proszę włączyć api za pomocą `json-server /api/item.json`")
        this.failed = true;
      }
    );
  }

  itemDetails(item: Item) {
    this.router.navigate(['/home/item', item.id]);
  }
}
