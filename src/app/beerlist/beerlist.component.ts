import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, style: string, ibu: number, abv: number, description: string){
    var newBeer: Beer = new Beer(title, style, ibu, abv, description);
    console.log(newBeer);
  }

}
