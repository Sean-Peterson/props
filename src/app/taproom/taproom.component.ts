import { Component, OnInit} from '@angular/core';
import { OnTap } from './../models/onTap.model';
import { OnTapService } from './../onTap.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-taproom',
  templateUrl: './taproom.component.html',
  styleUrls: ['./taproom.component.css'],
  providers: [OnTapService]
})
export class TaproomComponent implements OnInit {

  onTap;
  frag: string;
  public counter: number = 0;
  constructor(private OnTapService: OnTapService, private router: Router) {
    router.events.subscribe(s => {
          if (s instanceof NavigationEnd) {
            const tree = router.parseUrl(router.url);
            if (tree.fragment) {
              const element = document.querySelector("#" + tree.fragment);
              if (element) {
                this.frag = 'bottom';
                this.increment();
              }
            }
          }
        });
  }
  goDown(){
    if(this.frag == "bottom"){
      window.scroll({
        top:500000,
        left:0,
        behavior: 'smooth'
      });
      console.log('WTF');
    }
  }

  increment(){
    setTimeout(() =>
    {
      this.goDown();
    },
    500);
    }


  ngOnInit() {
    this.onTap = this.OnTapService.getOnTap();
  }



}
