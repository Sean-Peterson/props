import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BeersComponent } from './beers/beers.component';
import { BlondeComponent } from './beers/blonde/blonde.component';
import { DosComponent } from './beers/dos/dos.component';
import { CoffinComponent } from './beers/coffin/coffin.component';
import { FourKingsComponent } from './beers/four-kings/four-kings.component';
import { PorterComponent } from './beers/porter/porter.component';
import { LuckeyComponent } from './beers/luckey/luckey.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BeersComponent,
    BlondeComponent,
    DosComponent,
    CoffinComponent,
    FourKingsComponent,
    PorterComponent,
    LuckeyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
