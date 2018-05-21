import { Component, OnInit } from '@angular/core';
import { OnTap } from './../models/onTap.model';
import { OnTapService } from './../onTap.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
  providers: [OnTapService]
})
export class BeersComponent implements OnInit {
  onTap;
  constructor(private OnTapService: OnTapService) { }

  ngOnInit() {
    this.onTap = this.OnTapService.getOnTap();
  }

}
