import { Component, OnInit } from '@angular/core';
import { OnTap } from './../models/onTap.model';
import { OnTapService } from './../onTap.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css'],
  providers: [OnTapService]
})
export class BeerlistComponent implements OnInit {

  constructor(private onTapService: OnTapService) { }

  ngOnInit() {
  }

  submitForm(title: string, style: string, ibu: number, abv: number, description: string){
    var newOnTap: OnTap = new OnTap(title, style, ibu, abv, description);
    console.log(newOnTap);
    this.onTapService.addOnTap(newOnTap);
  }

}
