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
  thisYear;
  date = new Date();
  constructor(private OnTapService: OnTapService) { }

  ngOnInit() {
    this.thisYear = this.date.getFullYear();
    this.onTap = this.OnTapService.getOnTap();
  }

}
