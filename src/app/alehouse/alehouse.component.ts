import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alehouse',
  templateUrl: './alehouse.component.html',
  styleUrls: ['./alehouse.component.css']
})
export class AlehouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
