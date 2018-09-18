import { Component, OnInit } from '@angular/core';
import { Item } from './../models/item.model';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ItemService]
})
export class MenuComponent implements OnInit {

  item;
  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    this.item = this.ItemService.getItem();
  }

}
