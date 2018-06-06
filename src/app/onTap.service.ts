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

  // getPubBeers(){
  //   var onTap = this.onTap;
  //   onTap.forEach(function(){
  //     if (onTap.pub == false){
  //       console.log(onTap.name);
  //     }
  //   });
  // }

  // getDeckById(deckId: string) {
  //   return this.angularFire.database.object('decks/' + deckId);
  // }
  //
  // saveDeck(deck: Deck) {
  //   let newRef = this.decks.push(deck);
  //   return newRef.key;
  // }
  //
  // deleteDeck(deckId: string) {
  //   this.getDeckById(deckId).remove();
  // }
}
