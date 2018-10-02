import { Component, OnInit } from '@angular/core';
import { Item } from './../models/item.model';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css'],
  providers: [ItemService]
})
export class MenulistComponent implements OnInit {

  item;
  public authenticated: boolean;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.item = this.itemService.getItem();
    this.authenticated = false;
  }

  submitForm(title: string, price: number, description: string, pairing: string){

    if(title !== "" && price >= 0 && description !== "" && pairing !== ''){
      var newItem: Item = new Item(title, price, description, pairing);
      this.itemService.addItem(newItem);
    }else{
      confirm("You must enter info into all of the fields. Price must be a number.");
    }
  }

  editButtonClicked(item) {
    this.itemService.updateItem(item);
  }

  beginDeletingItem(item) {
    if (confirm('Are you sure you want to delete this beer?')) {
      this.itemService.deleteItem(item);
    }
  }

  authenticate(userName: string, password: string){
    var savedUserName: string = "Props";
    var savedPassword: string = "FlyingCoffin1";
    if(userName == savedUserName && password == savedPassword){
      this.authenticated = true;
    }else{
      confirm("that is the wrong username or password");
    }
  }

}
