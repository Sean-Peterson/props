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

  onTap;
  users;
  public authenticated: boolean;
  constructor(private onTapService: OnTapService) { }

  ngOnInit() {
    this.onTap = this.onTapService.getOnTap();
    this.authenticated = false;
  }

  submitForm(title: string, style: string, ibu: number, abv: number, description: string){
    if(title !== "" && style !== "" && ibu >= 0 && abv >= 0 && description !== ""){
      var newOnTap: OnTap = new OnTap(title, style, ibu, abv, description);
      this.onTapService.addOnTap(newOnTap);
    }else{
      confirm("You must enter info into all of the fields. Only use numbers for ibu and abv. Don't include the % sign.");
    }
  }

  editButtonClicked(onTap) {
    this.onTapService.updateBeer(onTap);
  }

  beginDeletingBeer(onTap) {
    if (confirm('Are you sure you want to delete this beer?')) {
      this.onTapService.deleteBeer(onTap);
    }
  }

  authenticate(userName: string, password: string){
    var savedUserName: string = "Props";
    var savedPassword: string = "Props";
    if(userName == savedUserName && password == savedPassword){
      this.authenticated = true;
    }else{
      confirm("that is the wrong username or password");
    }
  }

}
