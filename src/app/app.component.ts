import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  public showloader: boolean = false;
  private subscription: Subscription;
  private timer: Observable<any>;

  public ngOnInit() {
    // call this setTimer method when you want to set timer
    this.setTimer();
  }
  public ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  public setTimer(){

    // set showloader to true to show loading div on view
    this.timer        = Observable.timer(1000); // 5000 millisecond means 5 seconds
    this.subscription = this.timer.subscribe(() => {
    this.showloader   = true;
  });

    this.timer        = Observable.timer(10000); // 5000 millisecond means 5 seconds
    this.subscription = this.timer.subscribe(() => {
        // set showloader to false to hide loading div from view after 5 seconds
        this.showloader = false;
    });
  }
}
