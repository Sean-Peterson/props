import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { OnTap } from './models/onTap.model';

@Injectable()
export class OnTapService {
  onTap: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.onTap = this.db.list('onTap');
  }

  getOnTap() {
    return this.onTap;
  }

  addOnTap(newOnTap: OnTap) {
    this.onTap.push(newOnTap);
  }

  getOnTapById(OnTapId: string) {
    return this.db.object('/onTap/' + OnTapId);
  }

  updateBeer(localUpdatedBeer){
    var beerEntryInFirebase = this.getOnTapById(localUpdatedBeer.$key);
    beerEntryInFirebase.update({
      title: localUpdatedBeer.title,
      style: localUpdatedBeer.style,
      ibu: localUpdatedBeer.ibu,
      alcoholContent: localUpdatedBeer.abv,
      description: localUpdatedBeer.description,
      pub: localUpdatedBeer.pub,
      aleHouse: localUpdatedBeer.aleHouse,
      tapRoom: localUpdatedBeer.tapRoom
    });
  }

   deleteBeer(beerToDelete) {
     var beerInFirebase = this.getOnTapById(beerToDelete.$key);
     beerInFirebase.remove();
   }

}
