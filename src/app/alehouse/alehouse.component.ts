import { Component, OnInit } from '@angular/core';
import { OnTap } from './../models/onTap.model';
import { OnTapService } from './../onTap.service';

@Component({
  selector: 'app-alehouse',
  templateUrl: './alehouse.component.html',
  styleUrls: ['./alehouse.component.css'],
  providers: [OnTapService]
})
export class AlehouseComponent implements OnInit {

  onTap;
  constructor(private OnTapService: OnTapService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.onTap = this.OnTapService.getOnTap();
  }

}
