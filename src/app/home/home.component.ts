import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  beerDescription: string = '';

  insertText(beer){
    if beer == "blonde"{
      this.beerDescription = "Blonde bomber was the first beer ever."
    }else if{
      beer == "dos"{
        this.beerDescription = "Dos was the first beer ever."
      }
    }else{
      this.beerDescription = beer;
    }
    console.log(this.beerDescription);
  }

}
