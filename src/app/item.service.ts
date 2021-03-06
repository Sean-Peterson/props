import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Item } from './models/item.model';

@Injectable()
export class ItemService {
  item: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.item = this.db.list('item');
  }

  getItem() {
    return this.item;
  }

  addItem(newItem: Item) {
    this.item.push(newItem);
  }

  getItemById(ItemId: string) {
    return this.db.object('/item/' + ItemId);
  }

  updateItem(localUpdatedItem){
    var itemEntryInFirebase = this.getItemById(localUpdatedItem.$key);
    itemEntryInFirebase.update({
      title: localUpdatedItem.title,
      price: localUpdatedItem.price,
      description: localUpdatedItem.description,
      pairing: localUpdatedItem.pairing,
      lunchMenu: localUpdatedItem.lunchMenu,
      starter: localUpdatedItem.starter,
      soupSalad: localUpdatedItem.soupSalad,
      sanWrap: localUpdatedItem.sanWrap,
      burger: localUpdatedItem.burger,
      entree: localUpdatedItem.entree,
      side: localUpdatedItem.side
    });
  }

   deleteItem(itemToDelete) {
     var itemInFirebase = this.getItemById(itemToDelete.$key);
     itemInFirebase.remove();
   }

}
