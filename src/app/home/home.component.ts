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
    if (beer == "blonde"){
      this.beerDescription = "Blonde bomber was the first beer ever."
    }else if(beer == "dos"){
        this.beerDescription = "Dos was the first beer ever."
    }else if(beer == "coffin"){
        this.beerDescription = "Coffin was the first beer ever."
    }else if(beer == "kings"){
        this.beerDescription = "Kings was the first beer ever."
    }else if(beer == "porter"){
        this.beerDescription = "Porter was the first beer ever."
    }else if(beer == "luckey"){
        this.beerDescription = "Luckey was the first beer ever."
    }
  }

}
