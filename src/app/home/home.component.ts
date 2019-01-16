import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public count: number = 0

  public ticks: number = 0;

  public images: { name: string, position: number}[] = [{
    "name": '../../assets/images/glasses.jpeg',
    "position": 0,
  },
  {
    "name": '../../assets/images/fermenter.jpg',
    "position": 1,
  },
  {
    "name": '../../assets/images/handle.jpg',
    "position": 2,
  },
  {
    "name": '../../assets/images/handles.jpeg',
    "position": 3,
  },
  {
    "name": '../../assets/images/keg.jpg',
    "position": 4,
  },
  {
    "name": '../../assets/images/malts.jpg',
    "position": 5,
  },
  {
    "name": '../../assets/images/pour.jpeg',
    "position": 6,
  },
  {
    "name": '../../assets/images/dosCans.jpg',
    "position": 7,
  }
];

public aboutImage: string =  this.images[this.count]['name'];

  ngOnInit() {
    let timer = Observable.timer(4000,4000);
    timer.subscribe(tick => {
      if(this.count<7){
        this.count = this.count + 1;
        this.aboutImage=this.images[this.count]['name'];
        // document.getElementById("aboutImage").style.animation='aboutImageFadeIn 6s infinite';
        // document.getElementById("aboutImage").style.animation-duration='aboutImageFadeIn';
      }else{
        this.count = 0;
        this.aboutImage=this.images[this.count]['name'];
      }
    });

  }

  public beerDescription: string = '';

  insertText(beer){
    if (beer == "blonde"){
      this.beerDescription = "Blonde Bomber is medium-bodied American blonde ale with a light color and a balanced hop/malt combination. This unfiltered and unpasteurized ale finishes clean and dry."
    }else if(beer == "dos"){
      this.beerDescription = "Dos Pilotos is a South American style lager that is brewed with pale malts sourced from Patagonia, Chile. Dos Pilotos is an all day drinking beer that pairs perfectly with a lime."
    }else if(beer == "coffin"){
      this.beerDescription = "Flying Coffin IPA is a medium-bodied, balanced IPA that is copper in color with caramel flavors and distinct piney hop qualities. This IPA is infused with Chinook hops and dry-hopped with a Mt. Hood and Cascade hop combination"
    }else if(beer == "kings"){
      this.beerDescription = "4 Kings is rich in flavor and is seperated from its English counterparts by its slight citrus accent, bitterness, and dry finish."
    }else if(beer == "porter"){
      this.beerDescription = "Prop Oil Porter pours black with a light tan colored head. This porter has a substantial, complex, and flavorful roast character that tastes of dark chocolate and roasted grains. A fan favorite with it's characteristics of being not too sweet nor too bitter with a smooth aftertaste."
    }else if(beer == "luckey"){
      this.beerDescription = "Luckey O'Neill Lager is a Vienna style lager. It's light golden-brown coloring combines with a lager's smooth taste which give this lager an all day lawnmower beer feel. "
    }
  }

}
